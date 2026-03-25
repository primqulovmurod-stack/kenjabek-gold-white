import type { Metadata } from "next";
import { Playfair_Display, Inter, Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Xurshid & Mohinur - Nikoh to'yi",
  description: "Sizni eng baxtli kunimizga lutfan taklif etamiz!",
  openGraph: {
    title: "Xurshid & Mohinur - Nikoh to'yi",
    description: "Sizni eng baxtli kunimizga lutfan taklif etamiz!",
    siteName: "taklifnoma.ai",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "https://images.pexels.com/photos/30206324/pexels-photo-30206324/free-photo-of-elegant-gold-wedding-rings-on-marble-surface.jpeg",
        width: 1200,
        height: 630,
        alt: "Xurshid & Mohinur Nikoh to'yi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xurshid & Mohinur - Nikoh to'yi",
    description: "Sizni eng baxtli kunimizga lutfan taklif etamiz!",
    images: ["https://images.pexels.com/photos/30206324/pexels-photo-30206324/free-photo-of-elegant-gold-wedding-rings-on-marble-surface.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      className={`${inter.variable} ${playfairDisplay.variable} ${montserrat.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>{children}</body>
    </html>
  );
}
