import { Request, Response } from "express";
import { GetAllAgendas } from "../services/GetAllAgendasService";

export default class GetAllAgendasController {
  async handle(_: Request, response: Response) {
    const service = new GetAllAgendas();

    const agenda = await service.execute();

    return response.json(agenda);
  }
}
