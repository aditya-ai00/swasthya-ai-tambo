import { TamboProvider } from "@tambo-ai/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">
        <TamboProvider>
          {children}
        </TamboProvider>
      </body>
    </html>
  );
}
