import "reflect-metadata";
import { DataSource } from "typeorm";
import Users from "../entities/Users";
import Services from "../entities/Services";
import Agendas from "../entities/Agendas";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: [Users, Services, Agendas],
  migrations: [],
  subscribers: [],
});
