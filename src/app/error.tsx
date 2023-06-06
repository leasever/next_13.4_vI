"use client";
import { notFound } from "next/navigation";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  console.error("Error interno: ", error);

  const handleReset = () => {
    reset();
  };

  return (
    <div className="fullscreen-container">
      <h1>Error</h1>
      <p>Se produjo un error interno.</p>
      <button onClick={handleReset}>Volver al inicio</button>
    </div>
  );
};

export default Error;
