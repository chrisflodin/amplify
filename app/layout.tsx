import GoogleAnalytics from "@/components/analytics";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { inter, source_Sans_3 } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "amplify - Vi bygger din digitala framgång",
  description:
    "Vi har hjälpt några av Sveriges mest framgångsrika entreprenörer att växla upp. Gör det du med.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${source_Sans_3.className} ${inter.variable} antialiased`}
      >
        <GoogleAnalytics />
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
