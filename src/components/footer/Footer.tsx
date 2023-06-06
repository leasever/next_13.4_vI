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
    <footer className="bg-[#E6E5EE] text-black  pb-3">
      <Wrapper className="flex flex-col  md:flex-row  md:justify-between   gap-[50px] md:gap-0">
        <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
          <div className="flex flex-row items-center gap-3 shrink-0 m-auto">
            <Link href="/home" className="flex flex-row items-center">
              <Image
                src={"/logo_footer.png"}
                alt="Logo de la empresa"
                width={500}
                height={220}
                priority={true}
                className="w-auto"
              />
            </Link>
          </div>
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

      <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
          <div className="text-[12px] text-black/[0.7]  hover:text-black cursor-pointer">
            Condiciones de venta
          </div>
          <div className="text-[12px] text-black/[0.7]  hover:text-black cursor-pointer">
            Política de privacidad
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
