import Users from "../entities/Users";
import { AppDataSource } from "../database/data-source";

export type GetUserById = {
  id: string;
};

export class GetUserByIdService {
  async execute({ id }: GetUserById): Promise<Users> {
    const repository = AppDataSource.getRepository(Users);
    const user = await repository.findOneBy({ id });

    if (!user) {
      throw new Error("User does not exists");
    }
    return user;
  }
}
