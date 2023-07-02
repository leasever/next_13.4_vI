import { Meta } from "./meta.model";

export interface Products {
  data: Product[];
  meta: Meta;
}

export interface Product {
  id: number;
  attributes: AttributesProduct;
}

export interface AttributesProduct {
  name: string;
  subtitle?: any;
  description: string;
  slug: string;
  quotation_price?: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Image;
  thumbnail: Thumbnail;
  categories: Categories;
  product_sizes: Productsizes;
}

interface Productsizes {
  data: Datum3[];
}

interface Datum3 {
  id: number;
  attributes: Attributes4;
}

interface Attributes4 {
  quotation_price: number;
  val: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Categories {
  data: Datum2[];
}

interface Datum2 {
  id: number;
  attributes: Attributes3;
}

interface Attributes3 {
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Thumbnail {
  data: Data;
}

interface Data {
  id: number;
  attributes: Attributes2;
}

interface Attributes2 {
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

interface Formats2 {
  small: Large;
  thumbnail: Large;
}

interface Image {
  data: Datum[];
}

interface Datum {
  id: number;
  attributes: Attributes;
}

interface Attributes {
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

interface Formats {
  large: Large;
  small: Large;
  medium: Large;
  thumbnail: Large;
}

interface Large {
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

interface Providermetadata {
  public_id: string;
  resource_type: string;
}