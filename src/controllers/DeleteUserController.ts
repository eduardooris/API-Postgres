import { Request, Response } from "express";
import DeleteUserService from "../services/DeleteUserService";

export default class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const user = new DeleteUserService();

    try {
      await user.execute(id);
      response.status(200).json({ status: true });
    } catch (error) {
      return response.status(400).json(error?.message);
    }

    return response.json();
  }
}
