import HeroBanner from "@/components/banner/HeroBanner";
import PageTitle from "@/components/ui/PageTitle";
import Wrapper from "@/components/Wrapper";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <Wrapper>
        <PageTitle title={"Home"} description={"Home description"} />
      </Wrapper>
      ;
    </>
  );
}
