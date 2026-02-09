import { TamboProvider } from "@tambo-ai/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">
        <TamboProvider apiKey={process.env.NEXT_PUBLIC_TAMBO_API_KEY as string}>
          {children}
        </TamboProvider>
      </body>
    </html>
  );
}
