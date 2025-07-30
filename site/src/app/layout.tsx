import { TRPCProvider } from "@/trpc/client";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const font = Work_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Tebot",
    default: "Build Telegram Bots in Minutes - Tebot",
  },
  description:
    "A simple trade journaling application with AI assistance for analysis and statistics.",
  icons: [
    {
      rel: "icon",
      url: "/logo.png",
      href: "/logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <TRPCProvider>
        <html lang="en">
          <body
            className={`${font.className} antialiased flex flex-col min-h-screen relative`}
          >
            <span className="absolute size-[16rem] bg-radial from-primary/30 to-cyan-600/10 rounded- blur-[80px] top-[20rem] -translate-y-1/2 left-1/3 -translate-x-1/2" />
            <span className="absolute size-[16rem] bg-radial from-secondary/30 to-orange-600/10 rounded-full blur-[80px] bottom-[20rem] -translate-y-1/2 right-1/4 -translate-x-1/2" />
            <span className="absolute size-[12rem] bg-radial from-emerald-600/30 to-violet-600/10 rounded blur-[80px] bottom-[20rem] translate-y-1/2 right-2/5 translate-x-1/2" />
            {children}
          </body>
        </html>
      </TRPCProvider>
    </SessionProvider>
  );
}
