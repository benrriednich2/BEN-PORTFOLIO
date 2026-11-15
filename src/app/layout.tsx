
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Benhur P. Tomas Jr./@benrriednich",
  description:
    "Personal portfolio of Benhur P. Tomas Jr., a Full-Stack Developer continuously learning and building modern web applications.",
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
