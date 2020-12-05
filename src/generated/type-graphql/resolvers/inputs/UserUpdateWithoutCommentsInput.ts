import * as TypeGraphQL from "type-graphql";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PostUpdateManyWithoutCreatorInput } from "../inputs/PostUpdateManyWithoutCreatorInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class UserUpdateWithoutCommentsInput {
    @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined,
    })
    username?: StringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined,
    })
    email?: StringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined,
    })
    password?: StringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined,
    })
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field((_type) => PostUpdateManyWithoutCreatorInput, {
        nullable: true,
        description: undefined,
    })
    posts?: PostUpdateManyWithoutCreatorInput | undefined;
}
