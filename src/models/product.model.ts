export interface Products {
  data: Product[];
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

export interface Product {
  id: number;
  attributes: AttributesProduct;
}

export interface AttributesProduct {
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
  image: Image;
  thumbnail: Thumbnail;
  categories: Categories;
}

interface Categories {
  data: Datum3[];
}

export interface Datum3 {
  id: number;
  attributes: Attributes3;
}

export interface Attributes3 {
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Thumbnail {
  data: Data;
}

export interface Data {
  id: number;
  attributes: Attributes2;
}

export interface Attributes2 {
  name: string;
  alternativeText?: any;
  caption?: any;
  width: number;
  height: number;
  formats: Formats2;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata: Providermetadata;
  createdAt: string;
  updatedAt: string;
}

export interface Formats2 {
  small: Small;
  thumbnail: Small;
}

export interface Image {
  data: Datum2[];
}

export interface Datum2 {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  name: string;
  alternativeText?: any;
  caption?: any;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata: Providermetadata;
  createdAt: string;
  updatedAt: string;
}

export interface Formats {
  small: Small;
  thumbnail: Small;
  large?: Small;
  medium?: Small;
}

export interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
  provider_metadata: Providermetadata;
}

export interface Providermetadata {
  public_id: string;
  resource_type: string;
}

export interface Size {
  data: Datum[];
}

export interface Datum {
  size: string;
  enabled: boolean;
}
