import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link href="/home" className="flex flex-row items-center">
        <Image src="/principal_logo.png" width={200} height={90} alt="logo" />
      </Link>
    </>
  );
}
