import { registerEnumType } from "@nestjs/graphql";

interface EnumOptions {
  enum: any;
  name: string;
  description?: string;
}

export const registerGQLEnums = (enumOptions: EnumOptions[]) =>
  enumOptions.forEach((enumOption, _) =>
    registerEnumType(enumOption.enum, {
      name: enumOption.name,
      description: enumOption.description,
    })
  );
