import * as TypeGraphQL from "type-graphql";
import { PostCreateOrConnectWithoutcommentsInput } from "../inputs/PostCreateOrConnectWithoutcommentsInput";
import { PostCreateWithoutCommentsInput } from "../inputs/PostCreateWithoutCommentsInput";
import { PostUpdateWithoutCommentsInput } from "../inputs/PostUpdateWithoutCommentsInput";
import { PostUpsertWithoutCommentsInput } from "../inputs/PostUpsertWithoutCommentsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class PostUpdateOneRequiredWithoutCommentsInput {
    @TypeGraphQL.Field(_type => PostCreateWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    create?: PostCreateWithoutCommentsInput | undefined;

    @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    connect?: PostWhereUniqueInput | undefined;

    @TypeGraphQL.Field(_type => PostUpdateWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    update?: PostUpdateWithoutCommentsInput | undefined;

    @TypeGraphQL.Field(_type => PostUpsertWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    upsert?: PostUpsertWithoutCommentsInput | undefined;

    @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutcommentsInput, {
        nullable: true,
        description: undefined,
    })
    connectOrCreate?: PostCreateOrConnectWithoutcommentsInput | undefined;
}
