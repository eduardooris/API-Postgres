import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import Services from "./Services";
import User from "./Users";
@Entity("agendas")
export default class Agendas {
  @PrimaryColumn()
  id: string;

  @Column()
  id_service: string;

  @Column()
  id_user_create: string;

  @Column()
  approved: boolean;

  @ManyToOne(() => Services)
  @JoinColumn({ name: "id_service" })
  service: Services;

  @ManyToOne(() => User)
  @JoinColumn({ name: "id_user_create" })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
