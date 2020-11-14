import bcrypt from 'bcrypt';
import { Types } from 'mongoose';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { UserModel, UserResponse } from '../entities/User';
import { UserInput } from './../entities/User';

@Resolver()
export default class UserResolver {
  @Query(() => UserResponse!)
  async login(@Arg('options') userInput: UserInput): Promise<UserResponse> {
    const user = await UserModel.findOne({ email: userInput.email }).exec();

    if (!user) {
      return {
        successful: false,
        error: {
          target: 'email',
          message: 'User does not exist.',
        },
      };
    }

    const isAuthenticated = await bcrypt.compare(
      userInput.password,
      user.password!
    );

    return {
      successful: isAuthenticated,
      error: isAuthenticated
        ? undefined
        : {
            target: 'password',
            message: 'Incorrect password.',
          },
    };
  }

  @Mutation(() => UserResponse!)
  async registerUser(
    @Arg('options') userInput: UserInput
  ): Promise<UserResponse> {
    const user = await UserModel.findOne({ email: userInput.email }).exec();

    if (user)
      return {
        user: user,
        error: {
          target: 'email',
          message: 'Email is already registered.',
        },
      };

    const saltedHash = await bcrypt.hash(userInput.password, 16);

    return {
      user: await UserModel.create({
        _id: Types.ObjectId(),
        email: userInput.email,
        password: saltedHash,
      }),
    };
  }

  @Mutation(() => UserResponse!)
  async deleteUser(
    @Arg('options') userInput: UserInput
  ): Promise<UserResponse | undefined> {
    const user = await UserModel.findOne({ email: userInput.email }).exec();
    if (!user)
      return { successful: false, error: { message: 'User does not exist.' } };

    await user.deleteOne();

    return {
      successful: true,
    };
  }

  @Query(() => UserResponse!)
  async forgotPassword(): Promise<UserResponse> {
    return {
      successful: true,
    };
  }
}
