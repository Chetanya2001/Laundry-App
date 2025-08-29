import { Column, Entity, Index, OneToMany } from "typeorm";
import { OrderItems } from "./OrderItems";

@Index("services_pkey", ["id"], { unique: true })
@Entity("services", { schema: "public" })
export class Services {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("character varying", { name: "item_name", nullable: true })
  itemName: string | null;

  @Column("character varying", { name: "service_type", nullable: true })
  serviceType: string | null;

  @Column("numeric", { name: "price", nullable: true })
  price: string | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => OrderItems, (orderItems) => orderItems.service)
  orderItems: OrderItems[];
}
