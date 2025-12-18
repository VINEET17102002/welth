import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Welth",
  description: "One-stop finance platform",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <Header />

          <main className="min-h-screen">
            {children}
          </main>

          <footer className="bg-blue-200 py-12">
            <div className="container mx-auto px-4 text-center text-gray-50">
              <p>footer</p>
            </div>
          </footer>
        </ClerkProvider>
      </body>
    </html>
  );
}
