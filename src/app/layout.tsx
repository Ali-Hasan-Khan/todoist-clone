import type { Metadata } from "next";
import { inter } from '@/app/ui/fonts';
import "./globals.css";


export const metadata: Metadata = {
  title: "Todoist Clone",
  description: "A clone of todoist app using nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
