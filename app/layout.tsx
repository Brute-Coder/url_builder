import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Marketing URL Builder | TFU",
  description: "create marketing urls for your campaigns with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
