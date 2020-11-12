import { Types } from 'mongoose';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { User, UserModel } from '../entities/User';
import bcrypt from 'bcrypt';

@Resolver()
export default class GameResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    return await UserModel.find().exec();
  }

  @Query(() => User)
  async getUserByEmail(@Arg('email') email: string): Promise<User | null> {
    return await UserModel.findOne({ email }).exec();
  }

  @Mutation(() => User!)
  async registerUser(
    @Arg('email') email: string,
    @Arg('password') password: string
  ): Promise<User> {
    const hash = await bcrypt.hash(password, 16);

    return await UserModel.create({
      _id: Types.ObjectId(),
      email: email,
      password: hash,
    });
  }
}
