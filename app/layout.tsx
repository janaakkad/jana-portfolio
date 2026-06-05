import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jana Akkad — Lead. Compete. Build.",
  description:
    "Jana Akkad — Software Engineer, President of Tuwaiq Student Club, chess competitor, and Brazilian Jiu-Jitsu blue belt. Strategy in mind, execution in action.",
  openGraph: {
    title: "Jana Akkad — Lead. Compete. Build.",
    description:
      "Software Engineer. President. Chess Competitor. Jiu-Jitsu Athlete. Builder.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen vignette">
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
