import { OpenAIStreamPayload } from "@/lib/openai-strem";
import { API_URL, OPENIA_URL, STRAPI_API_TOKEN } from "./urls";
import { notFound } from "next/navigation";
import { cache } from "react";

export const fetchDataFromApi = cache(
  async (endpoint: string): Promise<any> => {
    const options = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + STRAPI_API_TOKEN,
      },
      next: { revalidate: 5 },
    };

    const res = await fetch(`${API_URL}${endpoint}`, options);
    if (!res.ok) {
      notFound();
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

  if (!res.ok) {
    throw new Error("Error en la solicitud");
  }

  const data = await res.json();
  return data;
};

export const openaiRequest = async (payload: OpenAIStreamPayload) => {
  const res = await fetch(`${OPENIA_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify(payload),
  });
  return res;
};
