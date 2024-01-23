import Services from "../entities/Services";
import { AppDataSource } from "../database/data-source";

export class GetAllServices {
  async execute(): Promise<Services[]> {
    const repository = AppDataSource.getRepository(Services);

    const services = await repository.find();

    return services;
  }
}
