import { Request, Response } from "express";
import DeleteService from "../services/DeleteService";

export default class DeleteServiceController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const agenda = new DeleteService();

    try {
      await agenda.execute(id);
      response.status(200).json({ status: true });
    } catch (error) {
      return response.status(400).json(error?.message);
    }

    return response.json();
  }
}
