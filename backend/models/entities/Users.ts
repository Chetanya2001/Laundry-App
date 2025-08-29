import { Column, Entity, Index, OneToMany } from "typeorm";
import { Deliveries } from "./Deliveries";
import { Notifications } from "./Notifications";
import { Orders } from "./Orders";

@Index("users_email_key", ["email"], { unique: true })
@Index("users_pkey", ["id"], { unique: true })
@Entity("users", { schema: "public" })
export class Users {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "name", nullable: true })
  name: string | null;

  @Column("character varying", { name: "email", nullable: true, unique: true })
  email: string | null;

  @Column("character varying", { name: "phone", nullable: true })
  phone: string | null;

  @Column("text", { name: "address", nullable: true })
  address: string | null;

  @Column("character varying", { name: "password_hash", nullable: true })
  passwordHash: string | null;

  @Column("character varying", { name: "role", nullable: true })
  role: string | null;

  @Column("boolean", { name: "is_active", nullable: true })
  isActive: boolean | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => Deliveries, (deliveries) => deliveries.captain)
  deliveries: Deliveries[];

  @OneToMany(() => Notifications, (notifications) => notifications.user)
  notifications: Notifications[];

  @OneToMany(() => Orders, (orders) => orders.user)
  orders: Orders[];
}
