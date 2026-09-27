import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-teal text-center text-white px-4">
      <h1 className="font-display text-6xl md:text-8xl lg:text-[120px] uppercase tracking-wide">
        404
      </h1>
      <h2 className="font-display text-3xl md:text-5xl uppercase tracking-wide mt-4 mb-8">
        Page Not Found
      </h2>
      <p className="text-lg text-white/90 max-w-md mx-auto mb-10">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="inline-block rounded bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wide text-teal-deep transition-colors hover:bg-ink hover:text-white"
      >
        Return to Home
      </Link>
    </main>
  );
}
