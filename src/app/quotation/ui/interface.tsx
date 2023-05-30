"use client";

import Wrapper from "@/components/Wrapper";
import Empty from "@/components/cart/Empty";
import CartItemsList from "@/components/cart/ListItems";
import QuotationForm from "@/components/quotation/Form";
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

            <div className="flex flex-col lg:flex-row gap-12 py-10">
              <CartItemsList cartItems={quotationItems} />
              <QuotationForm cartItems={quotationItems} />
            </div>
          </>
        )}

        {quotationItems.length < 1 && <Empty />}
      </Wrapper>
    </>
  );
};

export default QuotationInterface;
