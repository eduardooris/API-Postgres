import Agendas from "../entities/Agendas";
import { AppDataSource } from "../database/data-source";

export class GetAllAgendas {
  async execute(): Promise<Agendas[]> {
    const repository = AppDataSource.getRepository(Agendas);

    const agenda = await repository.find({
      relations: ["service", "user"],
    });
    return agenda;
  }
}
