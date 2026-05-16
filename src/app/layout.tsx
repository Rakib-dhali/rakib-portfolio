import type { Metadata } from "next";
import {Inter, Calistoga} from 'next/font/google'
import { twMerge } from "tailwind-merge";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import { Header } from "@/sections/Header";


const inter = Inter({ subsets: ["latin"],
  variable: "--font-inter",
 });
 const calistoga = Calistoga({subsets: ["latin"], weight: "400",
  variable: "--font-calistoga",
 });

export const metadata: Metadata = {
  title: "Rakibul Hossain",
  description: "Rakibul Hossain's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className={ twMerge(inter.variable, calistoga.variable, " bg-gray-900 text-white antialiased ")}>
        <Header />
        {children}</body>
    </html>
  );
}
