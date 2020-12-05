import * as TypeGraphQL from "type-graphql";
import { CommentCreateOrConnectWithoutuserInput } from "../inputs/CommentCreateOrConnectWithoutuserInput";
import { CommentCreateWithoutUserInput } from "../inputs/CommentCreateWithoutUserInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutUserInput } from "../inputs/CommentUpdateManyWithWhereWithoutUserInput";
import { CommentUpdateWithWhereUniqueWithoutUserInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutUserInput";
import { CommentUpsertWithWhereUniqueWithoutUserInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutUserInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class CommentUpdateManyWithoutUserInput {
    @TypeGraphQL.Field((_type) => [CommentCreateWithoutUserInput], {
        nullable: true,
        description: undefined,
    })
    create?: CommentCreateWithoutUserInput[] | undefined;

    @TypeGraphQL.Field((_type) => [CommentWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: CommentWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field((_type) => [CommentWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    set?: CommentWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field((_type) => [CommentWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    disconnect?: CommentWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field((_type) => [CommentWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    delete?: CommentWhereUniqueInput[] | undefined;

    @TypeGraphQL.Field(
        (_type) => [CommentUpdateWithWhereUniqueWithoutUserInput],
        {
            nullable: true,
            description: undefined,
        }
    )
    update?: CommentUpdateWithWhereUniqueWithoutUserInput[] | undefined;

    @TypeGraphQL.Field(
        (_type) => [CommentUpdateManyWithWhereWithoutUserInput],
        {
            nullable: true,
            description: undefined,
        }
    )
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput[] | undefined;

    @TypeGraphQL.Field((_type) => [CommentScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    deleteMany?: CommentScalarWhereInput[] | undefined;

    @TypeGraphQL.Field(
        (_type) => [CommentUpsertWithWhereUniqueWithoutUserInput],
        {
            nullable: true,
            description: undefined,
        }
    )
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput[] | undefined;

    @TypeGraphQL.Field((_type) => [CommentCreateOrConnectWithoutuserInput], {
        nullable: true,
        description: undefined,
    })
    connectOrCreate?: CommentCreateOrConnectWithoutuserInput[] | undefined;
}
