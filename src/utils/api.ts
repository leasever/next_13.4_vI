import { OpenAIStreamPayload } from "@/lib/openai-strem";
import { API_URL, STRAPI_API_TOKEN, OPENIA_URL } from "./urls";
import { cache } from "react";

export const fetchDataFromApi = cache(
  async (endpoint: string): Promise<any> => {
    const options = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + STRAPI_API_TOKEN,
      },
      next: { revalidate: 5, dynamicParams: false },
    };

    const res = await fetch(`${API_URL}${endpoint}`, options);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
  }
);

export const makePaymentRequest = async (endpoint: string, payload: any) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return data;
};

export const openaiRequest = cache(async (payload: OpenAIStreamPayload) => {
  const res = await fetch(`${OPENIA_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify(payload),
  });
  return res;
});
