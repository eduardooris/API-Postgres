import { Request, Response } from "express";
import UpdateUserService from "../services/UpdateUserService";

export default class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { email, last_name, name, password, user } = request.body;

    const service = new UpdateUserService();

    try {
      const newUser = await service.execute({
        id,
        email,
        last_name,
        name,
        password,
        user,
      });
      return response.json(newUser);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
}
