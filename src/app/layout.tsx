import type { Metadata } from "next";
import './globals.css'
import { Aside } from "@/components/Aside";
import { Search } from "@/components/Search";

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
        <Search />
        <div className="app-container">
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
