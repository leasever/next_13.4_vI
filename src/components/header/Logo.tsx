import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href="/home" className="flex flex-row items-center">
        <div className="w-[200px] h-[90px]">
          <Image
            src="/principal_logo.png"
            width={200}
            height={90}
            alt="logo"
            priority={false}
            className="w-[200px] h-[90px]"
          />
        </div>
      </Link>
    </>
  );
}
