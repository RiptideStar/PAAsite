import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from './components/Navbar';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Penn Autism Alliance",
  description: "Supporting individuals with autism and their families through education and community engagement in the Philadelphia area.",
  keywords: ["autism", "support", "Philadelphia", "community", "education", "Penn", "alliance"],
  authors: [{ name: "Penn Autism Alliance Team" }],
  openGraph: {
    title: "Penn Autism Alliance",
    description: "Supporting individuals with autism and their families in Philadelphia",
    images: [
      {
        url: "/hero-slideshow/IMG_4803.jpeg",
        width: 1200,
        height: 630,
        alt: "Penn Autism Alliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Penn Autism Alliance",
    description: "Supporting individuals with autism and their families in Philadelphia",
    images: ["/hero-slideshow/hero-image.jpg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
