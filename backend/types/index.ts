export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  address?: string;
}

export interface Order {
  _id: string;
  user: string | User;
  items: { type: string; service: "wash" | "dry_clean"; quantity: number }[];
  pickupDate: Date;
  deliveryDate?: Date;
  status: "pending" | "picked" | "processed" | "delivered";
  totalPrice: number;
  paymentStatus: string;
}

export interface JwtPayload {
  id: string;
  role: "user" | "admin";
}
