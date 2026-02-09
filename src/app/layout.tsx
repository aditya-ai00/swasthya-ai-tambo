import "./globals.css";
import { TamboProvider } from "@tambo-ai/react";
import { tambo } from "@/lib/tambo";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TamboProvider
          apiKey={process.env.NEXT_PUBLIC_TAMBO_API_KEY!}
          tambo={tambo}
        >
          {children}
        </TamboProvider>
      </body>
    </html>
  );
}
