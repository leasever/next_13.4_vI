export const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
export const STRIPE_API_TOKEN = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

export const API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL ||
  "https://quotation-api-serve.onrender.com";

export const CLIENT_URL =
  process.env.NEXT_PUBLIC_CLIENT_URL || "http://localhost:3000";

export const OPENIA_URL = process.env.NEXT_PUBLIC_OPENIA_URL;
