import { AppDataSource } from "../database/data-source";
import Agendas from "../entities/Agendas";

type AgendaUpdateRequest = {
  id: string;
  approved: boolean;
};

export default class UpdateAgendaService {
  async execute({ id, approved }: AgendaUpdateRequest): Promise<Agendas> {
    const repository = AppDataSource.getRepository(Agendas);

    const agenda = await repository.findOneBy({ id });

    if (!agenda) {
      throw new Error("agenda does not exist");
    }

    agenda.approved = approved || agenda.approved;

    return await repository.save(agenda);
  }
}
