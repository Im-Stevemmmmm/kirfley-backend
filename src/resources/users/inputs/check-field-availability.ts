import { ArgsType, Field } from "@nestjs/graphql";
import { InputField } from "./input-field";

@ArgsType()
export class CheckFieldAvailabilityArgs {
    @Field(() => InputField)
    field: InputField;

    @Field()
    value: string;
}
