"use client"; // Error boundaries must be Client Components

import React from "react";

interface ErrorComponentProps {
  error: Error;
  reset?: () => void; // <-- make optional
}

export default function ErrorComponent({ error, reset }: ErrorComponentProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-red-500 mb-4">{error?.message}</p>
      {reset && (
        <button
          onClick={reset}
          className="my-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Try again
        </button>
      )}
    </div>
  );
}
