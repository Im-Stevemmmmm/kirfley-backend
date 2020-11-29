import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";

const crudResolversMap = {
    User: crudResolvers.UserCrudResolver,
    Post: crudResolvers.PostCrudResolver,
    Comment: crudResolvers.CommentCrudResolver,
};
const actionResolversMap = {
    User: {
        user: actionResolvers.FindOneUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        createUser: actionResolvers.CreateUserResolver,
        deleteUser: actionResolvers.DeleteUserResolver,
        updateUser: actionResolvers.UpdateUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        upsertUser: actionResolvers.UpsertUserResolver,
        aggregateUser: actionResolvers.AggregateUserResolver,
    },
    Post: {
        post: actionResolvers.FindOnePostResolver,
        findFirstPost: actionResolvers.FindFirstPostResolver,
        posts: actionResolvers.FindManyPostResolver,
        createPost: actionResolvers.CreatePostResolver,
        deletePost: actionResolvers.DeletePostResolver,
        updatePost: actionResolvers.UpdatePostResolver,
        deleteManyPost: actionResolvers.DeleteManyPostResolver,
        updateManyPost: actionResolvers.UpdateManyPostResolver,
        upsertPost: actionResolvers.UpsertPostResolver,
        aggregatePost: actionResolvers.AggregatePostResolver,
    },
    Comment: {
        comment: actionResolvers.FindOneCommentResolver,
        findFirstComment: actionResolvers.FindFirstCommentResolver,
        comments: actionResolvers.FindManyCommentResolver,
        createComment: actionResolvers.CreateCommentResolver,
        deleteComment: actionResolvers.DeleteCommentResolver,
        updateComment: actionResolvers.UpdateCommentResolver,
        deleteManyComment: actionResolvers.DeleteManyCommentResolver,
        updateManyComment: actionResolvers.UpdateManyCommentResolver,
        upsertComment: actionResolvers.UpsertCommentResolver,
        aggregateComment: actionResolvers.AggregateCommentResolver,
    },
};

type ModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
    TModel extends ModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<TModel extends ModelNames> = {
    [TActionName in ModelResolverActionNames<TModel>]?: MethodDecorator[];
};

export type ResolversEnhanceMap = {
    [TModel in ModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
    resolversEnhanceMap: ResolversEnhanceMap
) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
        const resolverActionsConfig = resolversEnhanceMap[modelName]!;
        for (const modelResolverActionName of Object.keys(
            resolverActionsConfig
        )) {
            const decorators = resolverActionsConfig[
                modelResolverActionName as keyof typeof resolverActionsConfig
            ] as MethodDecorator[];
            const crudTarget = crudResolversMap[modelName].prototype;
            const actionResolversConfig = actionResolversMap[modelName];
            const actionTarget = (actionResolversConfig[
                modelResolverActionName as keyof typeof actionResolversConfig
            ] as Function).prototype;
            for (const decorator of decorators) {
                decorator(
                    crudTarget,
                    modelResolverActionName,
                    Object.getOwnPropertyDescriptor(
                        crudTarget,
                        modelResolverActionName
                    )!
                );
                decorator(
                    actionTarget,
                    modelResolverActionName,
                    Object.getOwnPropertyDescriptor(
                        actionTarget,
                        modelResolverActionName
                    )!
                );
            }
        }
    }
}
