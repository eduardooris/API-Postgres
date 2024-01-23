import { AppDataSource } from "../database/data-source";
import Users from "../entities/Users";
import { UserRequest } from "./CreateUsersService";
type UserUpdateRequest = UserRequest & {
  id: string;
};

export default class UpdateUserService {
  async execute({
    id,
    email,
    last_name,
    name,
    password,
    user,
  }: UserUpdateRequest): Promise<Users> {
    const repository = AppDataSource.getRepository(Users);

    const service = await repository.findOneBy({ id });

    if (!service) {
      throw new Error("User does not exist");
    }

    service.name = name || service.name;
    service.last_name = last_name || service.last_name;
    service.email = email || service.email;
    service.user = user || service.user;
    service.password = password || service.password;

    return await repository.save(service);
  }
}
