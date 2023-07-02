import { SizeProd } from "./cart.model";

export interface ProductQuotation {
  id: number;
  name?: string;
  size: SizeProd[];
  quantity?: number;
  quotation_price?: number;
}

export interface FormDataQuotation {
  name: string;
  email: string;
  phone: string;
  message: string;
}
