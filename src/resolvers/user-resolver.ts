import bcrypt from 'bcrypt';
import { Types } from 'mongoose';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { UserModel, UserResponse } from '../entities/user';
import { UserInput } from '../entities/user';

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
      user,
      successful: isAuthenticated,
      error: isAuthenticated
        ? undefined
        : {
            target: 'password',
            message: 'Incorrect password.',
          },
    };
  }

  @Query(() => UserResponse!)
  async checkFieldAvailability(
    @Arg('field') field: string,
    @Arg('value') value: string
  ): Promise<UserResponse> {
    const user = await UserModel.findOne({ [field]: value }).exec();

    return {
      successful: user ? false : true,
    };
  }

  @Mutation(() => UserResponse!)
  async registerUser(
    @Arg('options') userInput: UserInput
  ): Promise<UserResponse> {
    const user = await UserModel.findOne({ email: userInput.email }).exec();

    if (user)
      return {
        user,
        successful: false,
        error: {
          message: 'Email is already registered.',
        },
      };

    const saltedHash = await bcrypt.hash(userInput.password, 16);

    return {
      user: await UserModel.create({
        _id: Types.ObjectId(),
        username: userInput.username,
        email: userInput.email,
        password: saltedHash,
      }),
      successful: true,
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

  @Mutation(() => UserResponse!)
  async forgotPassword(): Promise<UserResponse> {
    return {
      successful: true,
    };
  }
}
