import bcrypt from 'bcrypt';
import ApolloContext from 'src/ApolloContext';
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { UserInput, UserResponse } from '../entities/user';

@Resolver()
export default class UserResolver {
  @Query(() => UserResponse!)
  async login(
    @Arg('options') userInput: UserInput,
    @Ctx() { db }: ApolloContext
  ): Promise<UserResponse> {
    const user = await db.user.findOne({
      where: { email: userInput.email },
    });

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
    @Arg('value') value: string,
    @Ctx() { db }: ApolloContext
  ): Promise<UserResponse> {
    const user = await db.user.findOne({
      where: { [field]: value },
    });

    return {
      successful: user ? false : true,
    };
  }

  @Mutation(() => UserResponse!)
  async registerUser(
    @Arg('options') userInput: UserInput,
    @Ctx() { db }: ApolloContext
  ): Promise<UserResponse> {
    const user = await db.user.findOne({
      where: { email: userInput.email },
    });

    if (user)
      return {
        user,
        successful: false,
        error: {
          target: 'email',
          message: 'Email is already registered.',
        },
      };

    const saltedHash = await bcrypt.hash(userInput.password, 16);

    return {
      user: await db.user.create({
        data: {
          username: userInput.username!,
          email: userInput.email!,
          password: saltedHash,
        },
      }),
      successful: true,
    };
  }

  @Mutation(() => UserResponse!)
  async deleteUser(
    @Arg('options') userInput: UserInput,
    @Ctx() { db }: ApolloContext
  ): Promise<UserResponse | undefined> {
    const query = { where: { email: userInput.email } };

    const user = await db.user.findOne(query);

    if (!user)
      return { successful: false, error: { message: 'User does not exist.' } };

    await db.user.delete(query);

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
