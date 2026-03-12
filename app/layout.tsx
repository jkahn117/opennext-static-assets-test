import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OpenNext Static Assets Test",
  description: "Testing static asset generation with OpenNext on Cloudflare",
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
