import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "MUHAMMAD FAYYADH RAHINDA | Software Engineer",
  description:
    "Full Stack Developer and UI/UX Designer based in Indonesia. Building thoughtful digital experiences, scalable applications, and modern products.",
  keywords: [
    "Muhammad Fayyadh Rahinda",
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Next.js",
    "React",
    "Indonesia Developer",
  ],
  authors: [{ name: "Muhammad Fayyadh Rahinda" }],
  openGraph: {
    title: "MUHAMMAD FAYYADH RAHINDA | Software Engineer",
    description:
      "Building thoughtful digital experiences, scalable applications, and modern products through code and design.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-[#f9f9f9] text-black antialiased min-h-screen flex flex-col grid-bg selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
