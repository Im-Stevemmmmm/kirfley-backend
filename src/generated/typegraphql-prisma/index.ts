import { NonEmptyArray } from "type-graphql";
import * as crudResolversImport from "./resolvers/crud/resolvers-crud.index";
import * as relationResolversImport from "./resolvers/relations/resolvers.index";

export * from "./enhance";
export * from "./enums";
export * from "./models";
export * from "./resolvers/crud";
export * from "./resolvers/inputs";
export * from "./resolvers/outputs";
export * from "./resolvers/relations";

export const crudResolvers = (Object.values(
    crudResolversImport
) as unknown) as NonEmptyArray<Function>;
export const relationResolvers = (Object.values(
    relationResolversImport
) as unknown) as NonEmptyArray<Function>;
export const resolvers = ([
    ...crudResolvers,
    ...relationResolvers,
] as unknown) as NonEmptyArray<Function>;
