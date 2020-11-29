import * as TypeGraphQL from "type-graphql";
import { CommentWhereInput } from "../inputs/CommentWhereInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class CommentListRelationFilter {
    @TypeGraphQL.Field(_type => CommentWhereInput, {
        nullable: true,
        description: undefined,
    })
    every?: CommentWhereInput | undefined;

    @TypeGraphQL.Field(_type => CommentWhereInput, {
        nullable: true,
        description: undefined,
    })
    some?: CommentWhereInput | undefined;

    @TypeGraphQL.Field(_type => CommentWhereInput, {
        nullable: true,
        description: undefined,
    })
    none?: CommentWhereInput | undefined;
}
