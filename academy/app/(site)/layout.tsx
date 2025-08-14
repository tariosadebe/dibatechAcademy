import "../../styles/globals.css";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://academy.dibatech.ng"),
  title: { default: "DibaTech Academy", template: "%s · DibaTech Academy" },
  description: "Industry-aligned tech programs with career support in Nigeria and online.",
  openGraph: { type: "website", url: "/", siteName: "DibaTech Academy" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
  {/* Next.js will use public/favicon.ico automatically */}
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
