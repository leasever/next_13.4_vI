import Chat from "@/components/Chat";
import "./globals.css";
import { Nunito } from "next/font/google";
import Providers from "@/components/Providers";
import Header from "@/components/Header";

const inter = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
}); 

export const metadata = {
  title: "ShoeStore - Home",
  description: "Your shoe store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <Providers>
        <body>
          <Chat />
          <Header />
          {children}
        </body>
      </Providers>
    </html>
  );
}
