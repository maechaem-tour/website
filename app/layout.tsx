import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mae Chaem Tour & Travel | Premium Private Tours in Northern Thailand",
    template: "%s | Mae Chaem Tour & Travel",
  },
  description:
    "Premium private tours in Northern Thailand. Explore Doi Inthanon, Pai, Ban Rak Thai, Mae Kampong, Sticky Waterfall, and ethical elephant sanctuaries with VIP transport.",
  keywords: [
    "private tours",
    "Northern Thailand",
    "Chiang Mai",
    "Doi Inthanon",
    "Pai",
    "Mae Chaem",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
