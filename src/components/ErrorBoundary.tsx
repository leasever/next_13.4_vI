import { useState, useEffect, ReactNode } from "react";

interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ fallback, children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const logErrorToMyService = (error: Error, componentStack: string | null) => {
      // Aquí puedes implementar la lógica para registrar el error en tu servicio
      console.error("Error:", error);
      console.error("Component stack:", componentStack);
    };

    const handleError = (error: ErrorEvent) => {
      setHasError(true);
      logErrorToMyService(error.error, error.error?.stack || null);
    };

    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  if (hasError) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default ErrorBoundary;
