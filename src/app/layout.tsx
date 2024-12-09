import type { Metadata, Viewport } from "next";
import "./globals.css";
import { satoshi } from "@/app/fonts";
import TopBanner from "@/app/components/layout/Banner/TopBanner";
import TopNavbar from "@/app/components/layout/Navbar/TopNavbar";
import Footer from "@/app/components/layout/Footer";
import HolyLoader from "holy-loader";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "SHOP.CO",
  description: "Create By Sakeena Majeed",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        <HolyLoader color="#868686" />
        <TopBanner />
        <Providers>
          <TopNavbar />
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
