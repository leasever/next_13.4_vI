import Providers from "@/components/Providers";
import Header from "@/components/header/Header";
import localFont from "next/font/local";
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-toastify/ReactToastify.min.css";

import { getCategories } from "./catalogue/services";
import "./globals.css";
export const revalidate = 5;

import Chat from "@/components/chat/Chat";
import Footer from "@/components/footer/Footer";

const roboto = localFont({
  src: "./fonts/Roboto-Regular.ttf",
  display: "swap",
  variable: "--font-roboto",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = await getCategories();

  return (
    <html lang="es" className={`${roboto.className}`}>
      <Providers>
        <body>
          <Header data={data} />
          {children}
          <Footer />
          <Chat />
        </body>
      </Providers>
    </html>
  );
}
