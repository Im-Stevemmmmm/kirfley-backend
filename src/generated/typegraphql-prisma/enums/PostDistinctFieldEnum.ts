import * as TypeGraphQL from 'type-graphql';

export enum PostDistinctFieldEnum {
    id = 'id',
    content = 'content',
    creatorId = 'creatorId',
}
TypeGraphQL.registerEnumType(PostDistinctFieldEnum, {
    name: 'PostDistinctFieldEnum',
    description: undefined,
});
