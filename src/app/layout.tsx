import Providers from "@/components/Providers";
import localFont from "next/font/local";
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-toastify/ReactToastify.min.css";

import "./globals.css";

import Chat from "@/components/chat/Chat";
import Footer from "@/components/footer/Footer";
import RootHeader from "@/components/header/RootHeader";

const roboto = localFont({
  src: "./fonts/Roboto-Regular.woff",
  display: "swap",
  variable: "--font-roboto",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="es" className={`${roboto.className}`}>
        <body>
          {RootHeader()}
          {children}
          <Footer />
          <Chat />
        </body>
      </html>
    </Providers>
  );
}
