import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";
import { PostCreateOrConnectWithoutcreatorInput } from "../inputs/PostCreateOrConnectWithoutcreatorInput";
import { PostCreateWithoutCreatorInput } from "../inputs/PostCreateWithoutCreatorInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutCreatorInput } from "../inputs/PostUpdateManyWithWhereWithoutCreatorInput";
import { PostUpdateWithWhereUniqueWithoutCreatorInput } from "../inputs/PostUpdateWithWhereUniqueWithoutCreatorInput";
import { PostUpsertWithWhereUniqueWithoutCreatorInput } from "../inputs/PostUpsertWithWhereUniqueWithoutCreatorInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PostUpdateManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutCreatorInput], {
    nullable: true,
    description: undefined
  })
  create?: PostCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutCreatorInput], {
    nullable: true,
    description: undefined
  })
  update?: PostUpdateWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutCreatorInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: PostUpdateManyWithWhereWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: PostScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutCreatorInput], {
    nullable: true,
    description: undefined
  })
  upsert?: PostUpsertWithWhereUniqueWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutcreatorInput], {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: PostCreateOrConnectWithoutcreatorInput[] | undefined;
}
