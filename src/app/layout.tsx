// "use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { ThemeProvider } from "@/components/theme-provider";
import { Separator } from "@/components/ui/separator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sunil Sharma | Portfolio",
  description: "Sunil Sharma is a multifaceted individual pursuing a Bachelor's degree in Business Administration. He is a content creator on YouTube, an entrepreneur, and an investor. With skills in digital marketing and web development, he is adept at navigating the digital landscape.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main bg-slate-200 text-gray-950 dark:bg-gray-950 dark:text-slate-200 ">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TracingBeam className="px-6">
              <Header />
              <Separator className="bg-slate-400 dark:bg-gray-700" />
              {children}
              <Footer />
            </TracingBeam>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
