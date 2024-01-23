import Agendas from "../entities/Agendas";
import { AppDataSource } from "../database/data-source";

export type GetAgendaById = {
  id: string;
};

export class GetAgendasByIdService {
  async execute({ id }: GetAgendaById): Promise<Agendas> {
    const repository = AppDataSource.getRepository(Agendas);
    const agenda = await repository.findOne({
      where: { id },
      relations: ["service", "user"],
    });

    if (!agenda) {
      throw new Error("Agenda does not exists");
    }
    return agenda;
  }
}
