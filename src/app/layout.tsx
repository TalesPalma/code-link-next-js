import type { Metadata } from "next";
import './globals.css'
import { Aside } from "@/components/Aside";
import { CardPost } from "@/components/CardCode";

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
    <html lang="pt-br" >
      <body>
        <div className="app-container">
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
