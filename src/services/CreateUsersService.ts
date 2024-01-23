import Users from "../entities/Users";
import { AppDataSource } from "../database/data-source";

export type UserRequest = {
  name: string;
  last_name: string;
  email: string;
  user: string;
  password: string;
};

export class CreateUserService {
  async execute({
    name,
    last_name,
    email,
    user,
    password,
  }: UserRequest): Promise<Users> {
    const repository = AppDataSource.getRepository(Users);

    if (
      (await repository.findOneBy({ email })) ||
      (await repository.findOneBy({ user }))
    ) {
      throw new Error("User already exists");
    }

    const newUser = repository.create({
      name,
      last_name,
      email,
      password,
      user,
    });

    await repository.save(newUser);

    return newUser;
  }
}
