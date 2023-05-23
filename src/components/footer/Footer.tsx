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
    <footer className="bg-black text-white pt-14 pb-3">
      <Wrapper className="flex flex-col  md:flex-row  md:justify-between   gap-[50px] md:gap-0">
        <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
          <div className="flex flex-row items-center gap-3 shrink-0 m-auto">
            <div>
              <Image
                src={"/logo_3.png"}
                alt="Logo de la empresa"
                width={200}
                height={200}
              />
            </div>
            <div>
              <Image
                src={"/logo_4.png"}
                alt="Logo de la empresa"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center md:justify-start">
          {icons.map((icon, index) => (
            <Link
              key={index}
              href={icon.href}
              target="_blank"
              className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
            >
              <>{icon.icon}</>
            </Link>
          ))}
        </div>
      </Wrapper>

      <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Condiciones de venta
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Política de privacidad
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
