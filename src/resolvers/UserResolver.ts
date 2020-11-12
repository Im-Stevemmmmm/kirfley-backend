import { getModelForClass } from '@typegoose/typegoose';
import { Query, Resolver } from 'type-graphql';
import User from '../entities/User';

@Resolver()
export default class GameResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    const UserModel = getModelForClass(User);

    return UserModel.find().exec();
  }

  // @Mutation(() => Game!)
  // async addGame(
  //   @Arg('name') name: string,
  //   @Arg('description') description: string,
  //   @Arg('year') year: string
  // ): Promise<Game> {
  //   const game = Game.create({
  //     name,
  //     description,
  //     year,
  //   });

  //   return await game.save();
  // }
}
