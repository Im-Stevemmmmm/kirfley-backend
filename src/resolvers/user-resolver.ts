import argon2 from "argon2";
import { ResolverContext } from "src/resolver-context";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { cookieName } from "../constants";
import { UserInput, UserResponse } from "../entities/user";
import { User } from "../generated/typegraphql-prisma";

@Resolver()
export default class UserResolver {
    @Query(() => User, { nullable: true })
    async me(@Ctx() { req, prisma }: ResolverContext) {
        const userId = req.session.userId;

        if (!userId) return null;

        return await prisma.user.findOne({ where: { id: userId } });
    }

    @Mutation(() => UserResponse!)
    async login(
        @Arg("usernameOrEmail") usernameOrEmail: string,
        @Arg("password") password: string,
        @Ctx() { req, prisma }: ResolverContext
    ): Promise<UserResponse> {
        const user = await prisma.user.findOne({
            where: usernameOrEmail.includes("@")
                ? { email: usernameOrEmail }
                : { username: usernameOrEmail },
        });

        if (!user) {
            return {
                successful: false,
                error: {
                    target: "email",
                    message: "User does not exist.",
                },
            };
        }

        const isAuthenticated = await argon2.verify(user.password!, password);

        req.session.userId = user.id;

        return {
            user,
            successful: isAuthenticated,
            error: isAuthenticated
                ? undefined
                : {
                      target: "password",
                      message: "Incorrect password.",
                  },
        };
    }

    @Query(() => UserResponse!)
    async checkFieldAvailability(
        @Arg("field") field: string,
        @Arg("value") value: string,
        @Ctx() { prisma }: ResolverContext
    ): Promise<UserResponse> {
        const user = await prisma.user.findOne({
            where: { [field]: value },
        });

        return {
            successful: user ? false : true,
        };
    }

    @Mutation(() => UserResponse!)
    async registerUser(
        @Arg("options") userInput: UserInput,
        @Ctx() { req, prisma }: ResolverContext
    ): Promise<UserResponse> {
        const user = await prisma.user.findOne({
            where: { email: userInput.email },
        });

        if (user)
            return {
                user,
                successful: false,
                error: {
                    target: "email",
                    message: "Email is already registered.",
                },
            };

        const saltedHash = await argon2.hash(userInput.password!);

        const newUser = await prisma.user.create({
            data: {
                username: userInput.username!,
                email: userInput.email!,
                password: saltedHash,
            },
        });

        req.session.userId = newUser!.id;

        return {
            user: newUser,
            successful: true,
        };
    }

    @Mutation(() => Boolean!)
    async logout(@Ctx() { req, res }: ResolverContext) {
        return new Promise(resolve =>
            req.session.destroy(err => {
                res.clearCookie(cookieName);

                if (err) {
                    console.log(err);
                    resolve(false);
                    return;
                }

                resolve(true);
            })
        );
    }

    @Mutation(() => UserResponse!)
    async deleteUser(
        @Arg("options") userInput: UserInput,
        @Ctx() { prisma }: ResolverContext
    ): Promise<UserResponse | undefined> {
        const query = { where: { email: userInput.email } };
        const user = await prisma.user.findOne(query);

        if (!user)
            return {
                successful: false,
                error: { message: "User does not exist." },
            };

        await prisma.user.delete(query);

        return {
            successful: true,
        };
    }
}
