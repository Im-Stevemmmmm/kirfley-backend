import * as TypeGraphQL from "type-graphql";
import { CommentUpdateManyWithoutPostInput } from "../inputs/CommentUpdateManyWithoutPostInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class PostUpdateWithoutCreatorInput {
    @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined,
    })
    uuid?: StringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined,
    })
    content?: StringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field((_type) => CommentUpdateManyWithoutPostInput, {
        nullable: true,
        description: undefined,
    })
    comments?: CommentUpdateManyWithoutPostInput | undefined;
}
