import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Deliveries } from "./Deliveries";
import { OrderItems } from "./OrderItems";
import { Users } from "./Users";
import { Payments } from "./Payments";

@Index("orders_pkey", ["id"], { unique: true })
@Entity("orders", { schema: "public" })
export class Orders {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("timestamp without time zone", { name: "order_date", nullable: true })
  orderDate: Date | null;

  @Column("character varying", { name: "status", nullable: true })
  status: string | null;

  @Column("numeric", { name: "total_amount", nullable: true })
  totalAmount: string | null;

  @Column("character varying", { name: "payment_status", nullable: true })
  paymentStatus: string | null;

  @Column("text", { name: "delivery_address", nullable: true })
  deliveryAddress: string | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => Deliveries, (deliveries) => deliveries.order)
  deliveries: Deliveries[];

  @OneToMany(() => OrderItems, (orderItems) => orderItems.order)
  orderItems: OrderItems[];

  @ManyToOne(() => Users, (users) => users.orders)
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;

  @OneToMany(() => Payments, (payments) => payments.order)
  payments: Payments[];
}
