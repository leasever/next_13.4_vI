import { AttributesProduct } from "./product.model";


export interface CartInterface {
  items: CartItemInterface[];
}

export interface CartItemInterface {
  size: SizeProd[];
  name: string;
  quantity?: number;
  id: number;
  attributes: AttributesProduct;
  quotation_price?: number;
}



export interface SizeProd {
  id: number;
  val: string;
  quantity: number;
  quotation_price?: number;
}

interface Thumbnail {
  data: Data;
}

interface Data {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  name: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  provider: string;
  provider_metadata: Providermetadata;
  createdAt: string;
  updatedAt: string;
}

interface Formats {
  small: Small;
  thumbnail: Small;
}

interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  size: number;
  width: number;
  height: number;
  provider_metadata: Providermetadata;
}

interface Providermetadata {
  public_id: string;
  resource_type: string;
}

interface Size {
  data: any[];
}
