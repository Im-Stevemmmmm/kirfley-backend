import * as TypeGraphQL from "type-graphql";
import { PostCreateOrConnectWithoutcreatorInput } from "../inputs/PostCreateOrConnectWithoutcreatorInput";
import { PostCreateWithoutCreatorInput } from "../inputs/PostCreateWithoutCreatorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class PostCreateManyWithoutCreatorInput {
    @TypeGraphQL.Field((_type) => [PostCreateWithoutCreatorInput], {
        nullable: true,
        description: undefined,
    })
    create?: PostCreateWithoutCreatorInput[] | undefined;

    @TypeGraphQL.Field((_type) => [PostWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: PostWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field((_type) => [PostCreateOrConnectWithoutcreatorInput], {
        nullable: true,
        description: undefined,
    })
    connectOrCreate?: PostCreateOrConnectWithoutcreatorInput[] | undefined;
}
