import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://outlawindustrial.com"),
  title: {
    default: "Outlaw Industrial | Southwest Wyoming Building Services",
    template: "%s | Outlaw Industrial"
  },
  description:
    "Outlaw Industrial provides commercial janitorial services and product supply for industrial and commercial facilities across southwest Wyoming.",
  openGraph: {
    title: "Outlaw Industrial",
    description:
      "Commercial janitorial services and product supply for industrial and commercial facilities across southwest Wyoming.",
    url: "https://outlawindustrial.com",
    siteName: "Outlaw Industrial",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Header />
          <main className="site-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
