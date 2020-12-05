import * as TypeGraphQL from "type-graphql";
import { PostDistinctFieldEnum } from "../../../../enums/PostDistinctFieldEnum";
import { PostOrderByInput } from "../../../inputs/PostOrderByInput";
import { PostWhereInput } from "../../../inputs/PostWhereInput";
import { PostWhereUniqueInput } from "../../../inputs/PostWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyPostArgs {
    @TypeGraphQL.Field((_type) => PostWhereInput, { nullable: true })
    where?: PostWhereInput | undefined;

    @TypeGraphQL.Field((_type) => [PostOrderByInput], { nullable: true })
    orderBy?: PostOrderByInput[] | undefined;

    @TypeGraphQL.Field((_type) => PostWhereUniqueInput, { nullable: true })
    cursor?: PostWhereUniqueInput | undefined;

    @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
    take?: number | undefined;

    @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
    skip?: number | undefined;

    @TypeGraphQL.Field((_type) => [PostDistinctFieldEnum], { nullable: true })
    distinct?: Array<"id" | "uuid" | "content" | "creatorId"> | undefined;
}