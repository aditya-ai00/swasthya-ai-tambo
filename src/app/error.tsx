"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div style={{ padding: 24 }}>
      <h2>Something went wrong</h2>
      <p>{error.message}</p>

      <button
        onClick={reset}
        style={{
          marginTop: 12,
          padding: "8px 12px",
          border: "1px solid #ccc",
        }}
      >
        Try again
      </button>
    </div>
  );
}
