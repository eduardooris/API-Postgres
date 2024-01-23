import { AppDataSource } from "../database/data-source";
import Services from "../entities/Services";

export default class DeleteServices {
  async execute(id: string) {
    const repository = AppDataSource.getRepository(Services);

    if (!(await repository.findOneBy({ id }))) {
      throw new Error("Service not found");
    }

    await repository.delete(id);
  }
}
