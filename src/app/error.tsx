"use client";

import { notFound } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error("Error interno: ", error);

  return notFound();
}
