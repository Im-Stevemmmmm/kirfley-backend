import argon2 from "argon2";
import { Arg, Args, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { COOKIE_NAME } from "../../constants";
import { ResolverContext } from "../../resolver-context";
import { AuthResponse, User } from "./user-model";
import {
    CheckFieldAvailabilityArgs,
    InputField,
    LoginArgs,
    RegisterUserInput,
} from "./user-params";

@Resolver()
export class UserResolver {
    @Query(() => User, { nullable: true })
    async me(@Ctx() { req, prisma }: ResolverContext) {
        const userId = req.session.userId;

        if (!userId) return null;

        return await prisma.user.findUnique({ where: { id: userId } });
    }

    @Query(() => Boolean!)
    async checkFieldAvailability(
        @Args() { field, value }: CheckFieldAvailabilityArgs,
        @Ctx() { prisma }: ResolverContext
    ): Promise<boolean> {
        const user = await prisma.user.findUnique({
            where: { [field]: value },
        });

        return !user;
    }

    @Mutation(() => AuthResponse!)
    async registerUser(
        @Arg("options")
        { year, month, day, username, email, password }: RegisterUserInput,
        @Ctx() { req, prisma }: ResolverContext
    ): Promise<AuthResponse> {
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (user)
            return {
                successful: false,
                error: {
                    field: InputField.USERNAME_OR_EMAIL,
                    message: "User already exists.",
                },
            };

        const newUser = await prisma.user.create({
            data: {
                dateOfBirth: new Date(year, month, day),
                username,
                email,
                password: await argon2.hash(password),
            },
        });

        req.session.userId = newUser.id;

        return {
            successful: true,
        };
    }

    @Mutation(() => AuthResponse!)
    async login(
        @Args() { usernameOrEmail, password }: LoginArgs,
        @Ctx() { req, prisma }: ResolverContext
    ): Promise<AuthResponse> {
        const user = await prisma.user.findUnique({
            where: usernameOrEmail.includes("@")
                ? { email: usernameOrEmail }
                : { username: usernameOrEmail },
        });

        if (!user)
            return {
                successful: false,
                error: {
                    field: InputField.USERNAME_OR_EMAIL,
                    message: "Incorrect username or email.",
                },
            };

        const isAuthenticated = await argon2.verify(user.password!, password);

        req.session.userId = user.id;

        return {
            successful: isAuthenticated,
            error: isAuthenticated
                ? undefined
                : {
                      field: InputField.PASSWORD,
                      message: "Incorrect password.",
                  },
        };
    }

    @Mutation(() => Boolean!)
    async logout(@Ctx() { req, res }: ResolverContext): Promise<Boolean> {
        return new Promise(resolve =>
            req.session.destroy(error => {
                res.clearCookie(COOKIE_NAME);

                if (error) {
                    console.log(error);
                    resolve(false);

                    return;
                }

                resolve(true);
            })
        );
    }
}
