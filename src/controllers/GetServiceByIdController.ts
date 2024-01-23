import { Request, Response } from "express";
import { GetServiceByIdService } from "../services/GetServiceByIdService";

export default class GetServiceByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new GetServiceByIdService();

    const agenda = await service.execute({ id });

    return response.json(agenda);
  }
}
