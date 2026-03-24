import type { Metadata } from "next";
import { Bebas_Neue, Space_Mono, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import CustomCursor from "@/components/ui/custom-cursor";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter-regular",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Issam's Personal website",
  description: "My professional world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${bebasNeue.variable} ${spaceMono.variable} ${inter.variable} antialiased`}
    >
      <body>
        <CustomCursor></CustomCursor>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
