import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const title = "Gustavo Champam | Backend Developer";
  const description =
    "Backend, automação e integrações com Node.js, TypeScript e Python para resolver problemas reais.";
  const socialImage = new URL("/og-systems-v2.png", metadataBase).toString();

  return {
    metadataBase,
    title,
    description,
    icons: {
      icon: "/gustavo-champam.png",
      shortcut: "/gustavo-champam.png",
      apple: "/gustavo-champam.png",
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "pt_BR",
      siteName: "Gustavo Champam",
      images: [
        {
          url: socialImage,
          width: 1734,
          height: 907,
          alt: "Gustavo Champam — Backend Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
