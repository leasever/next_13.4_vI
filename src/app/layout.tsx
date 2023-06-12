import Providers from "@/components/Providers";
import localFont from "next/font/local";
import { ImageLoaderProps } from "next/image";
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-toastify/ReactToastify.min.css";

import Chat from "@/components/chat/Chat";
import Footer from "@/components/footer/Footer";
import RootHeader from "@/components/header/RootHeader";
import "./globals.css";

export const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const roboto = localFont({
  src: "./fonts/Roboto-Regular.woff",
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({
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
