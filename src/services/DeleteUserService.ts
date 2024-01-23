import { AppDataSource } from "../database/data-source";
import Users from "../entities/Users";

export default class DeleteUserService {
  async execute(id: string) {
    const repository = AppDataSource.getRepository(Users);

    if (!(await repository.findOneBy({ id }))) {
      throw new Error("User not found");
    }

    await repository.delete(id);
  }
}
