import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { RegisterUserDto } from "./dtos/register-user.dto";
import { User, UserDocument } from "./user.model";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findUnique(where: string) {
    return await this.userModel.findOne({ _id: where }).exec();
  }

  async findOne(where: Partial<User>) {
    return await this.userModel.findOne(where).exec();
  }

  async create(data: RegisterUserDto) {
    const user = await this.userModel.create(data);

    return await user.save();
  }
}
