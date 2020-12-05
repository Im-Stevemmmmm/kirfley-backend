import * as TypeGraphQL from "type-graphql";
import { PostUpdateOneRequiredWithoutCommentsInput } from "../inputs/PostUpdateOneRequiredWithoutCommentsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCommentsInput } from "../inputs/UserUpdateOneRequiredWithoutCommentsInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class CommentUpdateInput {
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

    @TypeGraphQL.Field((_type) => PostUpdateOneRequiredWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    post?: PostUpdateOneRequiredWithoutCommentsInput | undefined;
}
