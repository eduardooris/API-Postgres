import Services from "../entities/Services";
import { AppDataSource } from "../database/data-source";

export type ServicesRequest = {
  title: string;
  price: number;
};

export class CreateServices {
  async execute({ title, price }: ServicesRequest): Promise<Services> {
    const repository = AppDataSource.getRepository(Services);

    if (await repository.findOneBy({ title })) {
      throw new Error("Services already exists");
    }

    const newServices = repository.create({
      title,
      price,
    });

    await repository.save(newServices);

    return newServices;
  }
}
