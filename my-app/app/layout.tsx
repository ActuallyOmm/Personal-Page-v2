import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WavyBackgroundWrapper from "@/components/ui/wavy-background-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Omm's Portfolio",
  description: "Place to view my projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative bg-transparent flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
          <WavyBackgroundWrapper />
          {children}
        </div>
      </body>
    </html>
  );
}
