"use client";

import Wrapper from "@/components/Wrapper";
import Empty from "@/components/cart/Empty";
import CartItemsList from "@/components/cart/ListItems";
import PaymentButton from "@/components/cart/PaymenButton";
import CartSummary from "@/components/cart/Sumary";
import PageTitle from "@/components/ui/PageTitle";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const CartInterface = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const subTotal = cartItems.reduce(
    (total, val) => total + val.attributes.price,
    0
  );

  return (
    <Wrapper className="pb-20">
      {cartItems.length > 0 && (
        <>
          <PageTitle title="Carro de compras" description="" />

          <div className="flex flex-col lg:flex-row gap-12 py-10">
            <CartItemsList cartItems={cartItems} />
            <CartSummary subTotal={subTotal} />
          </div>
          <div className="max-w-3xl m-auto">
            <PaymentButton items={cartItems} />
          </div>
        </>
      )}

      {cartItems.length < 1 && <Empty />}
    </Wrapper>
  );
};

export default CartInterface;
