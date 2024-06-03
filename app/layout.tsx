import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import toast, { Toaster } from "react-hot-toast";
import { AppContextProvider } from "../context/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Menoclean",
  description: "Remedial and clean up solutions provider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white`}>
        <AppContextProvider>{children}</AppContextProvider>
        <Toaster />
      </body>
    </html>
  );
}
