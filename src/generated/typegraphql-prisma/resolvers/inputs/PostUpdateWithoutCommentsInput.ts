import * as TypeGraphQL from 'type-graphql';
import { StringFieldUpdateOperationsInput } from '../inputs/StringFieldUpdateOperationsInput';
import { UserUpdateOneRequiredWithoutPostsInput } from '../inputs/UserUpdateOneRequiredWithoutPostsInput';

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class PostUpdateWithoutCommentsInput {
    @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
        nullable: true,
        description: undefined,
    })
    content?: StringFieldUpdateOperationsInput | undefined;

    @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPostsInput, {
        nullable: true,
        description: undefined,
    })
    creator?: UserUpdateOneRequiredWithoutPostsInput | undefined;
}
