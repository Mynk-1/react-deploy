import React, { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleError = (error, errorInfo) => {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
      setHasError(true);
      setError(error);
    };

    // Set up error handler
    const unhandledErrorHandler = window.addEventListener("error", handleError);
    const rejectionHandler = window.addEventListener("unhandledrejection", (event) => {
      handleError(event.reason);
    });

    // Clean up error handlers
    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", rejectionHandler);
    };
  }, []);

  if (hasError) {
    // You can render any custom fallback UI
    return (
      <div className="p-6 bg-red-100 border border-red-400 text-red-700">
        <h2 className="text-xl font-bold mb-2">Something went wrong.</h2>
        <p>{error?.toString()}</p>
      </div>
    );
  }

  // Render children normally if no error occurred
  return children;
};

export default ErrorBoundary;
