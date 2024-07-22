import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ScrollArea } from "@/components/ui/scroll-area";
import "animate.css/animate.compat.css"

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BUTLI",
  description: "This is the home page of the BuiltUp Leadership Institute",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Header />

        <ScrollArea className="h-screen bg-gray-500">{children}</ScrollArea>
      </body>
    </html>
  );
}
