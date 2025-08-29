import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Users } from "./Users";
import { Orders } from "./Orders";

@Index("deliveries_pkey", ["id"], { unique: true })
@Entity("deliveries", { schema: "public" })
export class Deliveries {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("timestamp without time zone", {
    name: "pickup_time",
    nullable: true,
  })
  pickupTime: Date | null;

  @Column("timestamp without time zone", {
    name: "delivery_time",
    nullable: true,
  })
  deliveryTime: Date | null;

  @Column("character varying", { name: "delivery_status", nullable: true })
  deliveryStatus: string | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Users, (users) => users.deliveries)
  @JoinColumn([{ name: "captain_id", referencedColumnName: "id" }])
  captain: Users;

  @ManyToOne(() => Orders, (orders) => orders.deliveries)
  @JoinColumn([{ name: "order_id", referencedColumnName: "id" }])
  order: Orders;
}
