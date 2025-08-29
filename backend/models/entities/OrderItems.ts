import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Orders } from "./Orders";
import { Services } from "./Services";

@Index("order_items_pkey", ["id"], { unique: true })
@Entity("order_items", { schema: "public" })
export class OrderItems {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("integer", { name: "quantity", nullable: true })
  quantity: number | null;

  @Column("numeric", { name: "price", nullable: true })
  price: string | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Orders, (orders) => orders.orderItems)
  @JoinColumn([{ name: "order_id", referencedColumnName: "id" }])
  order: Orders;

  @ManyToOne(() => Services, (services) => services.orderItems)
  @JoinColumn([{ name: "service_id", referencedColumnName: "id" }])
  service: Services;
}
