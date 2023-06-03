"use client";

import Wrapper from "@/components/Wrapper";
import Empty from "@/components/cart/Empty";
import CartItemsList from "@/components/cart/ListItems";
import QuotationForm from "@/components/quotation/Form";
import PageTitle from "@/components/ui/PageTitle";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
// import "react-toastify/ReactToastify.min.css";

export interface Quotation {
  selectedSize: string;
  name: string;
  quantity: number;
  productId: number;
}
const QuotationInterface = () => {
  const { quotationItems } = useSelector((state: RootState) => state.quotation);
  return (
    <>
      <Wrapper className="pb-20">
        {quotationItems.length > 0 && (
          <>
            <PageTitle title="Cotización" description="" />

            <div className="flex flex-col lg:flex-row gap-12 py-10">
              <div className="w-full">
                <CartItemsList cartItems={quotationItems} />
              </div>
              <div className="h-full sticky top-[50px]">
                <QuotationForm quotationItems={quotationItems} />
              </div>
            </div>
          </>
        )}

        {quotationItems.length < 1 && <Empty />}
        <ToastContainer />
      </Wrapper>
    </>
  );
};

export default QuotationInterface;
