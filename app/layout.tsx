import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";
import { macklinDisplay, source_Sans_3 } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "amplify - Vi bygger din digitala framgång",
  description:
    "Vi har hjälpt några av Sveriges mest framgångsrika entreprenörer att växla upp. Gör det du med.",
  generator: "amplify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${source_Sans_3.className} ${macklinDisplay.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
