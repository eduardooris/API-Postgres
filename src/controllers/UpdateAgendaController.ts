import { Request, Response } from "express";
import UpdateAgendaService from "../services/UpdateAgendaService";

export default class UpdateAgendaController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { approved } = request.body;

    const service = new UpdateAgendaService();

    try {
      const category = await service.execute({ id, approved });
      return response.json(category);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
}
