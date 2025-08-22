import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RouteProgress from "@/components/RouteProgress";
import { AuthProvider } from "@/context/AuthContext";
import Image from "next/image";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DiabetesHelp",
  description: "Tools, guidance, and education for diabetes management.",
  metadataBase: new URL("https://diabeteshelp.local"),
  openGraph: {
    title: "DiabetesHelp",
    description: "Tools, guidance, and education for diabetes management.",
    type: "website",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} antialiased selection:bg-primary/20 selection:text-primary`}>
        <AuthProvider>
          <RouteProgress />
          <div aria-hidden className="site-bg" />
          <Navbar />
          <div className="mx-auto max-w-6xl px-4 sm:px-6 mt-2">
            <div className="flex items-center">
              <Image src="/sugar.svg" alt="Sugar health logo" width={36} height={36} className="dark:invert-0" />
              <div className="text-sm text-foreground/70 hidden sm:block">Care for sugar patients</div>
            </div>
          </div>
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
