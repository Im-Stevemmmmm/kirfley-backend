import * as TypeGraphQL from "type-graphql";
import { PostUpdateOneRequiredWithoutCommentsInput } from "../inputs/PostUpdateOneRequiredWithoutCommentsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class CommentUpdateWithoutUserInput {
    @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined,
    })
    content?: StringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field((_type) => PostUpdateOneRequiredWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    post?: PostUpdateOneRequiredWithoutCommentsInput | undefined;
}