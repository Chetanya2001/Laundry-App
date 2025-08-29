import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Orders } from "./Orders";

@Index("payments_pkey", ["id"], { unique: true })
@Entity("payments", { schema: "public" })
export class Payments {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("numeric", { name: "amount", nullable: true })
  amount: string | null;

  @Column("character varying", { name: "payment_method", nullable: true })
  paymentMethod: string | null;

  @Column("character varying", { name: "transaction_id", nullable: true })
  transactionId: string | null;

  @Column("character varying", { name: "payment_status", nullable: true })
  paymentStatus: string | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @ManyToOne(() => Orders, (orders) => orders.payments)
  @JoinColumn([{ name: "order_id", referencedColumnName: "id" }])
  order: Orders;
}
