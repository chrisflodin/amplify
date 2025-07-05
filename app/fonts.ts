import { Inter, Source_Sans_3 } from "next/font/google";

export const source_Sans_3 = Source_Sans_3({ subsets: ["latin"] });

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
