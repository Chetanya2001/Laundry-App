import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Deliveries } from "./Deliveries";
import { Notifications } from "./Notifications";
import { Orders } from "./Orders";

@Index("users_email_key", ["email"], { unique: true })
@Entity("users", { schema: "public" })
export class Users {
  @PrimaryGeneratedColumn({ name: "id", type: "integer" })
  id: number;

  @Column("character varying", { name: "name", nullable: true })
  name: string | null;

  @Column("character varying", { name: "email", unique: true })
  email: string;

  @Column("character varying", { name: "phone", nullable: true })
  phone: string | null;

  @Column("text", { name: "address", nullable: true })
  address: string | null;

  @Column("character varying", { name: "password_hash", nullable: true })
  passwordHash: string | null;

  @Column("character varying", { name: "role", nullable: true })
  role: string | null;

  @Column("boolean", { name: "is_active", default: true })
  isActive: boolean;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp without time zone", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @OneToMany(() => Deliveries, (deliveries) => deliveries.captain)
  deliveries: Deliveries[];

  @OneToMany(() => Notifications, (notifications) => notifications.user)
  notifications: Notifications[];

  @OneToMany(() => Orders, (orders) => orders.user)
  orders: Orders[];
}
