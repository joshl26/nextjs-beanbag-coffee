import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"], weight: ["100", "400"] });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beanbag Coffee Co.",
  description: "Curating authentic roasts from around the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${raleway.className} antialiased`}>
        <div className="root-container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
