import GoogleAnalytics from "@/components/analytics";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { inter, source_Sans_3 } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "amplify - Vi bygger din digitala framgång",
  description:
    "En digital byrå som hjälper företag växa med strategi, design och digital marknadsföring. Specialister på apputveckling, webbutveckling och SEO.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
  metadataBase: new URL("https://weareamplify.se"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${source_Sans_3.className} ${inter.className} antialiased`}
      >
        <GoogleAnalytics />
        <Header />
        {children}
        <Footer />
        <Toaster />
        <SonnerToaster />
      </body>
    </html>
  );
}
