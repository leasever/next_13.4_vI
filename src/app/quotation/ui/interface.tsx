"use client";
import React from "react";
import Wrapper from "@/components/Wrapper";
import Empty from "@/components/cart/Empty";
import CartItemsList from "@/components/cart/ListItems";
import QuotationForm from "@/components/quotation/Form";
import PageTitle from "@/components/ui/PageTitle";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

const QuotationInterface = () => {
  const { quotationItems } = useSelector((state: RootState) => state.quotation);
  const hasQuotationItems = quotationItems.length > 0;

  return (
    <Wrapper>
      {hasQuotationItems && (
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

      {!hasQuotationItems && <Empty />}
      <ToastContainer />
    </Wrapper>
  );
};

export default QuotationInterface;
