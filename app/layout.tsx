import "./globals.css";

import ClientOnly from "./components/ClientOnly";
import LoginModal from "./components/modals/LoginModal";
import Navbar from "./components/navbar/Navbar";
import { Nunito } from "next/font/google";
import RegisterModal from "./components/modals/RegisterModal";
import ToastProvider from "./providers/ToastProvider";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce",
  description: "Ecommerce website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <ToastProvider />
          <RegisterModal />
          <LoginModal />
          <Navbar />
        </ClientOnly>

        {children}
      </body>
    </html>
  );
}
