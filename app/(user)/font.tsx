import { Inter, Suwannaphum } from "next/font/google";
import localFont from "next/font/local";

export const localCustomFont = localFont({
    src: "./fonts/TIMESS.ttf",
    display: "swap",
    variable: "--font-local-custom-font",
});
export const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const suwannaphum = Suwannaphum({
  weight: ["400", "700"],
  subsets: ["khmer"],
  variable: "--font-suwannaphum",
  display: "swap",
});
