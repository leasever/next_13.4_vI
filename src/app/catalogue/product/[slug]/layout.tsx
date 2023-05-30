import Wrapper from "@/components/Wrapper";

export default function layout({ children }: { children: React.ReactNode }) {
  return <Wrapper className=" py-10 md:py-20">{children}</Wrapper>;
}
