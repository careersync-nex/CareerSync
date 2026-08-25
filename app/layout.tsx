import type { Metadata } from "next";
// Reuses the existing global stylesheet untouched — no duplication.
import "../src/index.css";

export const metadata: Metadata = {
  title: "CareerSync",
  description: "Your AI-powered career operating system.",
  authors: [{ name: "NexDev" }],
  openGraph: {
    title: "CareerSync",
    description: "Your AI-powered career operating system.",
    type: "website",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dBillionaireDev",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
