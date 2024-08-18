import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { dbConfig } from "./utils/dbConfig";
// import Header from "./(pages)/components/Header";

import MainLayout from "./mainLayout";
import StoreProvider from "./global/storeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ValutDesk",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await dbConfig();
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <MainLayout>{children}</MainLayout>
        </StoreProvider>
      </body>
    </html>
  );
}
