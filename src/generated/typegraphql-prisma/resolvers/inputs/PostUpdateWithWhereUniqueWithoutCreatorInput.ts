import * as TypeGraphQL from "type-graphql";
import { PostUpdateWithoutCreatorInput } from "../inputs/PostUpdateWithoutCreatorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class PostUpdateWithWhereUniqueWithoutCreatorInput {
    @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
        nullable: false,
        description: undefined,
    })
    where!: PostWhereUniqueInput;

    @TypeGraphQL.Field(_type => PostUpdateWithoutCreatorInput, {
        nullable: false,
        description: undefined,
    })
    data!: PostUpdateWithoutCreatorInput;
}
