import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head'; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MC Roofers",
  description: "Professional Roofing Services in the Mid-South",
  icons: {
    icon: "/favicon-new.ico", // update this too just in case
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon-new.ico" type="image/x-icon" sizes="any" />
        <title>MC Roofers</title>
        <meta name="description" content="Professional Roofing Services in the Mid-South" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
