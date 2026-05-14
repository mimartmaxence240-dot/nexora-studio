import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kyvera | Création de sites web modernes",
  description:
    "Kyvera conçoit des sites web rapides, élégants et optimisés pour les entreprises ambitieuses, les commerces locaux et les startups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
