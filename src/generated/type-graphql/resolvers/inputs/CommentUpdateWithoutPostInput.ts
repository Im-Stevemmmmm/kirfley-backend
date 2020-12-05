import * as TypeGraphQL from "type-graphql";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCommentsInput } from "../inputs/UserUpdateOneRequiredWithoutCommentsInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class CommentUpdateWithoutPostInput {
    @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined,
    })
    content?: StringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field((_type) => UserUpdateOneRequiredWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    user?: UserUpdateOneRequiredWithoutCommentsInput | undefined;
}
