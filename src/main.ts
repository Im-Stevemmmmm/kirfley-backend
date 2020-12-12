import { NestFactory } from "@nestjs/core";
import * as connectRedis from "connect-redis";
import * as session from "express-session";
import Redis from "ioredis";
import { AppModule } from "./app.module";
import { cookieName, production } from "./constants";
import { InputField } from "./resources/users/inputs/input-field";
import { registerGQLEnums } from "./utils/register-enums";

const main = async () => {
    const app = await NestFactory.create(AppModule);

    const RedisStore = connectRedis(session);
    const redis = new Redis(process.env.REDIS_URL);

    app.use(
        session({
            name: cookieName,
            store: new RedisStore({
                client: redis,
                disableTouch: true,
            }),
            cookie: {
                maxAge: 157680000000,
                httpOnly: true,
                sameSite: "lax",
                secure: production,
                domain: undefined,
            },
            saveUninitialized: false,
            secret: process.env.SESSION_SECRET,
            resave: false,
        })
    );

    registerGQLEnums([
        {
            enum: InputField,
            name: "InputField",
        },
    ]);

    await app.listen(4000);
};

main().catch(err => console.log(err));