export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  address?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  id: number;
  user: User;
  pickupDate: Date;
  deliveryDate?: Date;
  status: "pending" | "picked" | "processed" | "delivered";
  totalPrice: number;
  paymentStatus: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: number;
  order: Order;
  type: string;
  service: "wash" | "dry_clean";
  quantity: number;
}

export interface JwtPayload {
  id: number;
  role: "user" | "admin";
}
