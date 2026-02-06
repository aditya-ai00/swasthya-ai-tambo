"use client";

import "./globals.css";
import { TamboProvider } from "@tambo-ai/react";
import { tools } from "@/lib/tambo";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">
        <TamboProvider
          apiKey={process.env.NEXT_PUBLIC_TAMBO_API_KEY ?? "demo"}
          tools={tools}
          mcpServers={[]}
        >
          {children}
        </TamboProvider>
      </body>
    </html>
  );
}
