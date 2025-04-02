"use client";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <h1 className="text-4xl font-bold">Something went wrong!</h1>
      <button onClick={() => reset()}>Try again</button>
      <p>{error.message}</p>
    </div>
  );
}
