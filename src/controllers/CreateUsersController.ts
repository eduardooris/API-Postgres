import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUsersService";

export default class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, user, email, password, last_name } = request.body;

    const service = new CreateUserService();

    try {
      const result = await service.execute({
        name,
        user,
        email,
        password,
        last_name,
      });
      return response.json(result);
    } catch (error) {
      return response.status(400).json(error?.message);
    }
  }
}
