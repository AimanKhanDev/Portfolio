import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aiman Khan — Web Developer & AI Agent Builder",
  description:
    "Portfolio of Aiman Khan — I design premium, responsive web experiences and build AI-powered applications, from polished brand landing pages to Gemini-powered chat agents.",
  keywords: [
    "Aiman Khan",
    "frontend developer",
    "AI agent builder",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Python",
    "Chainlit",
    "Gemini API",
  ],
  authors: [{ name: "Aiman Khan" }],
  openGraph: {
    title: "Aiman Khan — Web Developer & AI Agent Builder",
    description:
      "Premium web experiences and AI-powered applications by Aiman Khan.",
    type: "website",
    url: "https://github.com/AimanKhanDev",
  },
  twitter: {
    card: "summary",
    title: "Aiman Khan — Web Developer & AI Agent Builder",
    description:
      "Premium web experiences and AI-powered applications by Aiman Khan.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.setAttribute("data-theme",d?"dark":"light")}catch(e){document.documentElement.setAttribute("data-theme","dark")}})();`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
