import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import ToastProvider from "./providers/ToastProvider";

// const inter = Inter({ subsets: ['latin'] })

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
          {/* <Modal actionLabel="Submit" title={"Hello World"} isOpen={true} /> */}
          <Navbar />
        </ClientOnly>

        {children}
      </body>
    </html>
  );
}
