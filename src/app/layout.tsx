import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Import the Header and Footer components
import Header from './components/Header';
import Footer from './components/Footer';

// Initialize the Inter font with a Latin subset
const inter = Inter({ subsets: ['latin'] });

// Define metadata for the website
export const metadata: Metadata = {
  title: "Jordan Thirkle's Personal Website",
  description: "An Aspiring Web Developer.",
};

// Define the RootLayout component, which will be used to wrap pages
export default function RootLayout({
  children, // React children components to be wrapped
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
