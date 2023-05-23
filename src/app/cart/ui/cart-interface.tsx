"use client";

import Wrapper from "@/components/Wrapper";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import Empty from "./cart-empty";
import CartItemsList from "./cart-item-list";
import CartSummary from "./cart-sumary";
import PaymentButton from "./cart-payament-button";

const CartInterface = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const subTotal = cartItems.reduce(
    (total, val) => total + val.attributes.price,
    0
  );

  return (
    <div className="w-full py-10 md:py-20">
      <Wrapper>
        {cartItems.length > 0 && (
          <>
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Carro de compras
              </div>
            </div>

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
    </div>
  );
};

export default CartInterface;
