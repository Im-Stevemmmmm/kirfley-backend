import * as TypeGraphQL from "type-graphql";
import { CommentWhereInput } from "../../../inputs/CommentWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCommentArgs {
    @TypeGraphQL.Field((_type) => CommentWhereInput, { nullable: true })
    where?: CommentWhereInput | undefined;
}
