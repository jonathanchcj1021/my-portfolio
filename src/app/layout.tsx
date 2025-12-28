import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jonathan Churn | System Analyst & Team Lead",
  description: "Professional portfolio of Jonathan Churn, a System Analyst and Team Lead with over 10 years of experience in full-stack development and microservice architecture.",
  keywords: ["System Analyst", "Team Lead", "Full Stack Developer", "Next.js", "C#", "Node.js", "Hong Kong IT"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased text-slate-900 dark:text-slate-50 dark:bg-slate-950`}>
        {children}
      </body>
    </html>
  );
}

