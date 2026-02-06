import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">🚀 Swasthya AI</h1>
        <p className="text-gray-600">
          AI-powered health assistant
        </p>

        <Link
          href="/chat"
          className="inline-block rounded-md bg-black px-6 py-3 text-white"
        >
          Start Chat
        </Link>
      </div>
    </main>
  );
}
