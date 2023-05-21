import Header from "@/components/Header";
import Providers from "@/components/Providers";
import localFont from "next/font/local";
import { getCategories } from "./catalogue/services";
import "./globals.css";
import Chat from "@/components/chat/Chat";

const nunito = localFont({
  src: "./fonts/Nunito-Regular.ttf",
  display: "swap",
  variable: "--font-nunito",
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
    <html lang="es" className={`${nunito.className}`}>
      <Providers>
        <body>
          <Chat />
          <Header data={data} meta={meta} />
          {children}
        </body>
      </Providers>
    </html>
  );
}
