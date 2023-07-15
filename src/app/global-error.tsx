"use client";

import { notFound } from "next/navigation";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error("Error global: ", error);
  return (
    <>
      error cause: {error.cause}
      error name: {error.name}
      error message {error.message}
      error stack: {error.stack}
    </>
  );
}
