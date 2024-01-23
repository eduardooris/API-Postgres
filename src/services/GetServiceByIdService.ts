import Services from "../entities/Services";
import { AppDataSource } from "../database/data-source";

export type GetServiceById = {
  id: string;
};

export class GetServiceByIdService {
  async execute({ id }: GetServiceById): Promise<Services> {
    const repository = AppDataSource.getRepository(Services);
    const agenda = await repository.findOneBy({ id });

    if (!agenda) {
      throw new Error("Service does not exists");
    }
    return agenda;
  }
}
