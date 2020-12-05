import * as TypeGraphQL from "type-graphql";
import { User } from "../../../models/User";
import { FindManyUserArgs } from "./args/FindManyUserArgs";

@TypeGraphQL.Resolver((_of) => User)
export class FindManyUserResolver {
    @TypeGraphQL.Query((_returns) => [User], {
        nullable: false,
        description: undefined,
    })
    async users(
        @TypeGraphQL.Ctx() ctx: any,
        @TypeGraphQL.Args() args: FindManyUserArgs
    ): Promise<User[]> {
        return ctx.prisma.user.findMany(args);
    }
}
