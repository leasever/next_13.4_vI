import Header from "@/components/Header";
import Providers from "@/components/Providers";
import Chat from "@/components/chat/Chat";
import localFont from "next/font/local";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const nunito = localFont({
  src: "./fonts/Nunito-Regular.ttf",
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
    <html lang="es" className={`${nunito.className}`}>
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
