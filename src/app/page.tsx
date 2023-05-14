import HeroBanner from "@/components/HeroBanner";
import PageTitle from "@/components/PageTitle";
import Wrapper from "@/components/Wrapper";

export const metadata = {
  title: "ShoeStore - Home",
  description: "Your shoe store",
};

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Wrapper>
        <PageTitle title={"Home"} description={"Home description"} />
      </Wrapper>
    </>
  );
}
