import type { Metadata } from "next";
import './globals.css'

export const metadata: Metadata = {
  title: "Code Link",
  description: "Social midia for devs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
