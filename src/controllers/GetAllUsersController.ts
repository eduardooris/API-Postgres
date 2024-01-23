import { Request, Response } from "express";
import { GetAllUsersService } from "../services/GetAllUsersService";

export default class GetAllUsersController {
  async handle(_: Request, response: Response) {
    const service = new GetAllUsersService();

    const user = await service.execute();

    return response.json(user);
  }
}
