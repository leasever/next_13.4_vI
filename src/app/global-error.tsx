"use client";

import NotFoundCatchAll from "./[...not_found]/page";

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
  return NotFoundCatchAll();
}
