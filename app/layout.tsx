import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clay on Campus · UT Austin GTM Ambassador Club",
  description:
    "The first GTM Ambassador Club at any university. UT Austin students learning modern go-to-market by running real Clay workflows for real Austin startups. Powered by Clay.",
  keywords: [
    "Clay",
    "GTM",
    "UT Austin",
    "go-to-market",
    "ambassador club",
    "student organization",
    "Austin startups",
  ],
  openGraph: {
    title: "Clay on Campus · UT Austin GTM Ambassador Club",
    description:
      "The first GTM Ambassador Club at any university. Powered by Clay.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#E8EEFB",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
