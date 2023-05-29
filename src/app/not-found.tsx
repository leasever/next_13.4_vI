import Wrapper from "@/components/Wrapper";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[650px] flex items-center">
      <Wrapper>
        <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
          <div className="text-2xl font-bold">404 not found!</div>

          <Link href={"/"}>
            <p className="font-bold mt-5">Continue Shopping</p>
          </Link>
        </div>
      </Wrapper>
    </div>
  );
}
