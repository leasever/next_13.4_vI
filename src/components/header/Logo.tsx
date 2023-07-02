import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="w-[205px] h-[90px] flex flex-row items-center">
      <Link href="/home">
        <Image
          src="/principal_logo.png"
          width={205}
          height={90}
          alt="logo"
          quality={100}
          priority={true}
        />
      </Link>
    </div>
  );
}
