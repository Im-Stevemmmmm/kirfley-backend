import * as TypeGraphQL from "type-graphql";
import { PostCreateWithoutCreatorInput } from "../inputs/PostCreateWithoutCreatorInput";
import { PostUpdateWithoutCreatorInput } from "../inputs/PostUpdateWithoutCreatorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class PostUpsertWithWhereUniqueWithoutCreatorInput {
    @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
        nullable: false,
        description: undefined,
    })
    where!: PostWhereUniqueInput;

    @TypeGraphQL.Field(_type => PostUpdateWithoutCreatorInput, {
        nullable: false,
        description: undefined,
    })
    update!: PostUpdateWithoutCreatorInput;

    @TypeGraphQL.Field(_type => PostCreateWithoutCreatorInput, {
        nullable: false,
        description: undefined,
    })
    create!: PostCreateWithoutCreatorInput;
}
