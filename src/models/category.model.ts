export interface Categories {
  data: Category[];
  meta: Meta;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Category {
  id: number;
  attributes: Attributes2;
}

export interface Attributes2 {
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  products: Products;
}

export interface Products {
  data: Datum2[];
}

export interface Datum2 {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
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
}

export interface Size {
  data: Datum[];
}

export interface Datum {
  size: string;
  enabled: boolean;
}
