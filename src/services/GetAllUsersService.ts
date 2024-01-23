import Users from "../entities/Users";
import { AppDataSource } from "../database/data-source";

export class GetAllUsersService {
  async execute(): Promise<Users[]> {
    const repository = AppDataSource.getRepository(Users);

    const users = await repository.find();

    return users;
  }
}
