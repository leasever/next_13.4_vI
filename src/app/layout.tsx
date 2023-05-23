import Header from "@/components/header/Header";
import Providers from "@/components/Providers";
import localFont from "next/font/local";
import { getCategories } from "./catalogue/services";
import "./globals.css";
import Chat from "@/components/chat/Chat";
import Footer from "@/components/footer/Footer";

const roboto = localFont({
  src: "./fonts/Roboto-Regular.ttf",
  display: "swap",
  variable: "--font-roboto",
});

export const metadata = {
  title: "ShoeStore - Home",
  description: "Your shoe store",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, meta } = await getCategories();

  return (
    <html lang="es" className={`${roboto.className}`}>
      <Providers>
        <body>
          <Chat />
          <Header data={data} meta={meta} />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
