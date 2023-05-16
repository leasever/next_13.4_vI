export interface CartInterface {
  items: CartItemInterface[];
}

export interface CartItemInterface {
  selectedSize: string;
  oneQuantityPrice: number;
  quantity: number;
  id: number;
  attributes: Attributes2;
}

interface Attributes2 {
  name: string;
  subtitle: string;
  price: number;
  description: string;
  size: Size;
  original_price: number;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Size;
  thumbnail: Thumbnail;
  categories: Size;
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
