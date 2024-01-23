import { Request, Response } from "express";
import { CreateServices } from "../services/CreateService";

export default class CreateServicesController {
  async handle(request: Request, response: Response) {
    const { title, price } = request.body;

    const service = new CreateServices();

    try {
      const result = await service.execute({
        title,
        price,
      });
      return response.json(result);
    } catch (error) {
      return response.status(400).json(error?.message);
    }
  }
}
