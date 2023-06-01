import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="w-[205px] h-[90px]">
      <Link href="/home" className="flex flex-row items-center">
        <Image
          src="/principal_logo.png"
          width={205}
          height={90}
          alt="logo"
          priority={true}
        />
      </Link>
    </div>
  );
}
