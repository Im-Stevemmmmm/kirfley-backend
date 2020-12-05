import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType({
    isAbstract: true,
    description: undefined,
})
export class DateTimeFieldUpdateOperationsInput {
    @TypeGraphQL.Field((_type) => Date, {
        nullable: true,
        description: undefined,
    })
    set?: Date | undefined;
}
