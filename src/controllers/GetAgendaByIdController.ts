import { Request, Response } from "express";
import { GetAgendasByIdService } from "../services/GetAgendaByIdService";

export default class GetAgendasByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new GetAgendasByIdService();

    const agenda = await service.execute({ id });

    return response.json(agenda);
  }
}
