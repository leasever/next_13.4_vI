import { Product } from "./product.model";

export interface ItemCart extends Product {
  selectedSize: string;
  oneQuantityPrice: number;
  quantity: number;
}
