import { AppDataSource } from "../database/data-source";
import Services from "../entities/Services";
import { ServicesRequest } from "./CreateService";
type ServiceUpdateRequest = ServicesRequest & {
  id: string;
};

export default class UpdateService {
  async execute({ id, title, price }: ServiceUpdateRequest): Promise<Services> {
    const repository = AppDataSource.getRepository(Services);

    const service = await repository.findOneBy({ id });

    if (!service) {
      throw new Error("service does not exist");
    }

    service.title = title || service.title;
    service.price = price || service.price;

    return await repository.save(service);
  }
}
