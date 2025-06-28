import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JSCC Live Schedule",
  description: "Conference schedule board for JSCC Live event",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <img src="/jack-hammer.gif" alt="Jack Hammer" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] z-50" />
        
        <div className="fixed font-bold top-1/2 left-1/2 -translate-x-1/2 translate-y-[170px] text-[18px] z-50 text-center whitespace-nowrap">
          I am on it, updating the schedule board.
        </div>
        {/* <Providers>
          {children}
        </Providers> */}
      </body>
    </html>
  );
}
