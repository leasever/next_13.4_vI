"use client";

import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const handleReset = () => {
    reset();
  };

  return (
    <Wrapper className=" py-5 ">
      <div className="flex-[2] flex flex-col items-center   gap-3">
        <div className="w-[250px] h-[250px]">
          <Image src="/404.png" width={250} height={250} alt="perdido" />
        </div>
        <span className="text-xl font-bold">
          Lo siento 😥, la página que busca no existe
        </span>
        {/* error for developer */}
        {/* <span className="text-center">{error.message}</span> */}
        {/* <button onClick={handleReset}>Volver a intentarlo</button> */}
        <Link href="/home">
          <p className="underline text-lg">Regresar</p>
        </Link>
      </div>
    </Wrapper>
  );
};

export default error;
