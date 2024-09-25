import { RequestHandler } from "express";

export type ExpressHandler<Req, Res> = RequestHandler<
  string,
  Partial<Req>,
  Partial<Res>,
  any
>;

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "user" | "admin" | "seller";
}

export interface SellerReq {
  requestId: string;
  userId: string;
  name: string;
  email: string;
  password: string;
  status: "approved" | "rejected" | "pending";
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  mainImage?: string;
  images?: string[];
  categoryId: string;
  sellerId: string;
}

export interface Address {
  id: string;
  userId: string;
  street: string;
  city: string;
  state: string;
  country: string;
  phone: string;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  rating: number;
  review: string;
}

export interface Order {
  id: string;
  userId: string;
  totalAmount: number;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
}
