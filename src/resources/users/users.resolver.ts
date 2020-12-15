import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import * as argon from "argon2";
import { cookieName } from "src/constants";
import { AppContext } from "src/utils/app-context";
import { LoginDto } from "./dtos/login.dto";
import { RegisterUserDto } from "./dtos/register-user.dto";
import { CheckFieldAvailabilityArgs } from "./inputs/check-field-availability";
import { InputField } from "./inputs/input-field";
import { AuthResponse } from "./responses/auth-response";
import { User } from "./user.model";
import { UsersService } from "./users.service";

@Resolver()
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}

    @Query(() => User, { nullable: true })
    async me(@Context() { req }: AppContext) {
        const userId = req.session.userId;

        if (!userId) return null;

        return await this.usersService.findUnique({ id: userId });
    }

    @Query(() => Boolean)
    async checkFieldAvailability(
        @Args() { field, value }: CheckFieldAvailabilityArgs
    ) {
        const user = await this.usersService.findOne({ [field]: value });

        return !user;
    }

    @Mutation(() => AuthResponse)
    async registerUser(
        @Args("data")
        { username, email, password }: RegisterUserDto,
        @Context() { req }: AppContext
    ) {
        const user = await this.usersService.findOne({
            email,
        });

        if (user)
            return {
                successful: false,
                error: {
                    field: InputField.USERNAME_OR_EMAIL,
                    message: "User already exists.",
                },
            };

        const newUser = await this.usersService.create({
            username,
            email,
            password: await argon.hash(password),
        });

        req.session.userId = newUser.id;

        return { user: newUser, successful: true };
    }

    @Mutation(() => AuthResponse)
    async login(
        @Args("data") { usernameOrEmail, password }: LoginDto,
        @Context() { req }: AppContext
    ) {
        const where = usernameOrEmail.includes("@")
            ? { email: usernameOrEmail }
            : { username: usernameOrEmail };

        const user = await this.usersService.findOne(where);

        if (!user)
            return {
                successful: false,
                error: {
                    field: InputField.USERNAME_OR_EMAIL,
                    message: "Incorrect username or email.",
                },
            };

        const isAuthenticated = await argon.verify(user.password, password);

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

    @Mutation(() => Boolean)
    async logout(@Context() { req, res }: AppContext) {
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
}
