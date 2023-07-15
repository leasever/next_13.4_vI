"use client";

import { notFound } from "next/navigation";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(`error cause: ${error.cause}
      error name: ${error.name}
      error message: ${error.message}
      error stack: ${error.stack}`);
  return <>Hola aquí personalizamos el error de servidor strapi</>;
}
