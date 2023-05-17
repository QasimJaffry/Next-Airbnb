import "./globals.css";
import { Nunito } from "next/font/google";

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
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
