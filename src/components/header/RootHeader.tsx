import { getCategories } from "@/services";
import Header from "./Header";

export default async function RootHeader() {
  const { data } = await getCategories();

  return (
    <>
      <Header data={data} />
    </>
  );
}
