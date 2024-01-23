import { Request, Response } from "express";
import { GetAllServices } from "../services/GetAllServices";

export default class GetAllServicesController {
  async handle(_: Request, response: Response) {
    const service = new GetAllServices();

    const allServices = await service.execute();

    return response.json(allServices);
  }
}
