import { Request, Response } from "express";
import { CreateAgendas } from "../services/CreateAgendaService";

export default class CreateAgendasController {
  async handle(request: Request, response: Response) {
    const { id_service, id_user_create } = request.body;

    const agenda = new CreateAgendas();

    try {
      const result = await agenda.execute({
        id_service,
        id_user_create,
        approved: false,
      });
      return response.json(result);
    } catch (error) {
      return response.status(400).json(error?.message);
    }
  }
}
