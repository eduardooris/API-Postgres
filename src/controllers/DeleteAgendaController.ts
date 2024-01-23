import { Request, Response } from "express";
import DeleteAgendaService from "../services/DeleteAgendaService";

export default class DeleteAgendaController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const agenda = new DeleteAgendaService();

    try {
      await agenda.execute(id);
      response.status(200).json({ status: true });
    } catch (error) {
      return response.status(400).json(error?.message);
    }

    return response.json();
  }
}
