"use client";

import Wrapper from "@/components/Wrapper";
import Empty from "@/components/cart/Empty";
import CartItemsList from "@/components/cart/ListItems";
import PageTitle from "@/components/ui/PageTitle";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const QuotationInterface = () => {
  const { quotationItems } = useSelector((state: RootState) => state.quotation);

  return (
    <>
      <Wrapper className="pb-20">
        {quotationItems.length > 0 && (
          <>
            <PageTitle title="Cotización" description="" />

            <div className="flex flex-col lg:flex-row ">
              <CartItemsList cartItems={quotationItems} />
            </div>
            <div className="max-w-3xl m-auto">
              <button className="w-full py-4 rounded-full bg-[#1D1D1D] text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center">
                Enviar
              </button>
            </div>
          </>
        )}

        {quotationItems.length < 1 && <Empty />}
      </Wrapper>
    </>
  );
};

export default QuotationInterface;
