import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Wrapper from "../Wrapper";
import Image from "next/image";

interface Props {
  icon: React.ReactNode;
  href: string;
}

const icons: Props[] = [
  { href: "https://facebook.com", icon: <FaFacebookF size={20} /> },
  { href: "https://twitter.com", icon: <FaTwitter size={20} /> },
  { href: "https://youtube.com", icon: <FaYoutube size={20} /> },
  { href: "https://instagram.com", icon: <FaInstagram size={20} /> },
];

const Footer = () => {
  return (
    <footer className="bg-[#E6E5EE] text-black  pb-3 ">
      <Wrapper className="flex flex-col items-center  md:flex-row  md:justify-between h-[330px] md:h-[268px] gap-[50px] md:gap-0 pt-10">
        <div className="m-w-[500px]">
          <Link href="/">
            <Image
              src={"/principal_logo.png"}
              alt="Logo de la empresa"
              width={500}
              height={220}
            />
          </Link>
        </div>

        <div className="flex gap-4 justify-center md:justify-start">
          {icons.map((icon, index) => (
            <Link key={index} href={icon.href} target="_blank">
              <div className="w-10 h-10 rounded-full bg-[#E6E5EE] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
                {icon.icon}
              </div>
            </Link>
          ))}
        </div>
      </Wrapper>

      <div className="max-w-[1440px] m-auto ">
        <div className="flex gap-2 md:gap-5 text-left flex-wrap justify-center">
          <div className="text-[12px] text-black/[0.7]  hover:text-black cursor-pointer">
            Condiciones de venta
          </div>
          <div className="text-[12px] text-black/[0.7]  hover:text-black cursor-pointer">
            Política de privacidad
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
