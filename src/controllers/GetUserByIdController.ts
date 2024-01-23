import { Request, Response } from "express";
import { GetUserByIdService } from "../services/GetUserByIdService";

export default class GetUserByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new GetUserByIdService();

    const user = await service.execute({ id });

    return response.json(user);
  }
}
