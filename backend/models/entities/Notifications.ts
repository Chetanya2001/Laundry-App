import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Users } from "./Users";

@Index("notifications_pkey", ["id"], { unique: true })
@Entity("notifications", { schema: "public" })
export class Notifications {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("text", { name: "message", nullable: true })
  message: string | null;

  @Column("character varying", { name: "type", nullable: true })
  type: string | null;

  @Column("boolean", { name: "is_read", nullable: true })
  isRead: boolean | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @ManyToOne(() => Users, (users) => users.notifications)
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
