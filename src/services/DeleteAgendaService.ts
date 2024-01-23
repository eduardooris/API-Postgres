import { AppDataSource } from "../database/data-source";
import Agendas from "../entities/Agendas";

export default class DeleteAgendaService {
  async execute(id: string) {
    const repository = AppDataSource.getRepository(Agendas);

    if (!(await repository.findOneBy({ id }))) {
      throw new Error("Agenda not found");
    }

    await repository.delete(id);
  }
}
