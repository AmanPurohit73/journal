import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NoteFul",
  description: "A Journal app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body className={inter.className}>
        <div className="fixed inset-0 -z-10 bg-[url('/bg.jpg')] opacity-50" />
        <Header></Header>
        <main className="min-h-screen">{children}</main>
        <Footer></Footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
