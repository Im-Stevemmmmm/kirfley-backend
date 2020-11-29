import * as TypeGraphQL from "type-graphql";
import { User } from "../../../models/User";
import { FindOneUserArgs } from "./args/FindOneUserArgs";

@TypeGraphQL.Resolver(_of => User)
export class FindOneUserResolver {
    @TypeGraphQL.Query(_returns => User, {
        nullable: true,
        description: undefined,
    })
    async user(
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Args() args: FindOneUserArgs
    ): Promise<User | null> {
        return ctx.prisma.user.findOne(args);
    }
}
