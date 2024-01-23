import Agendas from "../entities/Agendas";
import { AppDataSource } from "../database/data-source";

export type AgendasRequest = {
  id_service: string;
  id_user_create: string;
  approved: boolean;
};

export class CreateAgendas {
  async execute({
    id_service,
    id_user_create,
    approved,
  }: AgendasRequest): Promise<Agendas> {
    const repository = AppDataSource.getRepository(Agendas);

    const novaAgenda = repository.create({
      id_service,
      id_user_create,
      approved,
    });

    await repository.save(novaAgenda);

    return novaAgenda;
  }
}
