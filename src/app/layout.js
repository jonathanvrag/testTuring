import { Inter } from "next/font/google";
import "./globals.css";
import FloatingMenu from "./components/FloatingMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TestTurinng - Jonathan Vera",
  description: "Prueba técnica para Turinng elaborada por Jonathan Vera",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <FloatingMenu />
      </body>
    </html>
  );
}
