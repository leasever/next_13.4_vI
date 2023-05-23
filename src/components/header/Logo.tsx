import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href="/" className="flex flex-row items-center">
        <Image src="/logo_1.png" width={70} height={70} alt="logo" />
        <Image src="/logo_2.png" width={180} height={80} alt="logo" />
      </Link>
    </>
  );
}
