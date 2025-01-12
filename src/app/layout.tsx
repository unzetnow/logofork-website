import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Logofork - Export Your Branding Projects In Style",
    template: "%s | Logofork",
  },
  description:
    "Seamlessly drag & drop, paste, or upload your SVG logos and instantly get every file format you or your clients need - delivered in seconds!",
  metadataBase: new URL("https://logofork.com"),
  keywords: [
    "logo converter",
    "SVG conversion",
    "logo export",
    "brand assets",
    "file format converter",
    "logo transformation",
    "design tools",
    "branding exports",
  ],
  authors: [{ name: "Logofork" }],
  creator: "Logofork",
  publisher: "Logofork",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://logofork.com",
    title: "Logofork - Export Your Branding Projects In Style",
    description:
      "Seamlessly convert and export your logos to any format. Fast, easy, and professional-grade exports for all your branding needs.",
    siteName: "Logofork",
    images: [
      {
        url: "https://logofork.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Logofork - Professional Logo Format Converter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Logofork - Export Your Branding Projects In Style",
    description:
      "Convert and export your logos to any format instantly. The fastest way to get your brand assets in every format you need.",
    creator: "@logofork",
    images: ["https://logofork.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://data.unzet.com/script.js"
          data-website-id="91ddefe0-4137-4f82-94ac-2cde39d19f3d"
          defer
        />
      </head>
      <body className={`${dmSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          forcedTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
