import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Assignment Landing Page",
  description: "Elegant and responsive landing page built with Next.js and Tailwind CSS.",
  keywords: ["Next.js", "Tailwind CSS", "Landing Page", "Frontend Project"],
  authors: [{ name: "Saniya Khan" }],
  icons: {
    icon: "/favicon.ico", // Ensure this file is in your /public folder
  },
  openGraph: {
    title: "Assignment Landing Page",
    description: "Elegant and responsive landing page built with Next.js and Tailwind CSS.",
    url: "https://my-project-ew33.vercel.app",
    siteName: "Landing Page Assignment",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
