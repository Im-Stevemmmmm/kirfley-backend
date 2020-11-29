import * as TypeGraphQL from "type-graphql";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class PostScalarWhereInput {
    @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    AND?: PostScalarWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    OR?: PostScalarWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    NOT?: PostScalarWhereInput[] | undefined;

    @TypeGraphQL.Field(_type => IntFilter, {
        nullable: true,
        description: undefined,
    })
    id?: IntFilter | undefined;

    @TypeGraphQL.Field(_type => StringFilter, {
        nullable: true,
        description: undefined,
    })
    content?: StringFilter | undefined;

    @TypeGraphQL.Field(_type => IntFilter, {
        nullable: true,
        description: undefined,
    })
    creatorId?: IntFilter | undefined;
}
