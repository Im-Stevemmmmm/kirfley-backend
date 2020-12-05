import { registerEnumType } from "type-graphql";

interface EnumOptions {
    enum: any;
    name: string;
    description?: string;
}

export const registerEnums = (enumOptions: EnumOptions[]) =>
    enumOptions.forEach((enumOption, _) =>
        registerEnumType(enumOption.enum, {
            name: enumOption.name,
            description: enumOption.description,
        })
    );
