import type { Metadata } from 'next';
import "./globals.css";

export const metadata: Metadata = {
  title: 'Češi v Německu',
  description: 'Češi v Německu',
  icons: {
  icon: [
    {
      url: "favicon.png",
      href: "favicon.png",
    },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
