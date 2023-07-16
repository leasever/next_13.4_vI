"use client";
import { PageNotFound } from "@/lib/execptions";

export default function NotFoundCatchAll() {
  throw new PageNotFound();
}
