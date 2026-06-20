import type { Metadata } from "next";
import { Playfair_Display, Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThreeCanvas from "@/components/ThreeCanvas";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shree | Engineer • Model • Dreamer • Creator",
  description: "Official portfolio of Shree, an Electronics & Communication Engineering student and fashion model. Balancing technology, creativity, and elegance in Visakhapatnam, India.",
  keywords: ["Shree", "Portfolio", "Engineer", "Model", "Dreamer", "Creator", "Visakhapatnam", "Next.js", "Creative Developer", "Feminine Design", "Dior Portfolio"],
  openGraph: {
    title: "Shree | Engineer • Model • Dreamer",
    description: "Balancing technology, creativity, and elegance. Portfolio designed with Next.js & WebGL.",
    url: "https://github.com/Saman-Sunasara/portfolio-1",
    siteName: "Shree Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shree | Engineer • Model • Dreamer",
    description: "Balancing technology, creativity, and elegance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col text-gray-800 antialiased overflow-x-hidden">
        <SmoothScroll>
          <ThreeCanvas />
          <div className="grain-overlay" />
          <Navbar />
          <div className="relative z-10 flex-grow">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
