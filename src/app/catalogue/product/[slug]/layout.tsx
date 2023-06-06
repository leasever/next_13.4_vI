import Wrapper from "@/components/Wrapper";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  );
}
