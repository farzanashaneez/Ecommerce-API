import { User } from '../../../core/entities/userEntity';
import { UserRepository } from '../../../core/interfaces/repositories/userRepositoryInterfce';
import { UserModel } from './models/userModel';

export class MongooseUserRepository implements UserRepository {
  async findById(id: string): Promise<User | null> {
    return UserModel.findById(id).lean();
  }

  async findByEmail(email: string): Promise<User | null> {
    return UserModel.findOne({ email }).lean();
  }

  async create(user: User): Promise<User> {
    const createdUser = await UserModel.create(user);
    return createdUser.toObject();
  }

  async update(id: string, user: Partial<User>): Promise<User | null> {
    return UserModel.findByIdAndUpdate(id, user, { new: true }).lean();
  }

  async delete(id: string): Promise<boolean> {
    const result = await UserModel.deleteOne({ _id: id });
    return result.deletedCount > 0;
  }
}