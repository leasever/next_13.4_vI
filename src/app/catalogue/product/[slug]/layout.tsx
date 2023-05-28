import Wrapper from "@/components/Wrapper";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper className="md:py-20">
      {children}
    </Wrapper>
  );
}
