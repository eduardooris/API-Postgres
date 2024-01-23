import { Request, Response } from "express";
import UpdateService from "../services/UpdateService";

export default class UpdateServiceController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { title, price } = request.body;

    const service = new UpdateService();

    try {
      const category = await service.execute({ id, title, price });
      return response.json(category);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
}
