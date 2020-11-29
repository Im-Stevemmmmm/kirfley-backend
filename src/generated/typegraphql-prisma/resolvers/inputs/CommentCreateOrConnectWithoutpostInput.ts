import * as TypeGraphQL from 'type-graphql';
import { CommentCreateWithoutPostInput } from '../inputs/CommentCreateWithoutPostInput';
import { CommentWhereUniqueInput } from '../inputs/CommentWhereUniqueInput';

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class CommentCreateOrConnectWithoutpostInput {
    @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
        nullable: false,
        description: undefined,
    })
    where!: CommentWhereUniqueInput;

    @TypeGraphQL.Field(_type => CommentCreateWithoutPostInput, {
        nullable: false,
        description: undefined,
    })
    create!: CommentCreateWithoutPostInput;
}
