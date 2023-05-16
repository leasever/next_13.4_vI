"use client";
import CartItem from "@/components/CartItem";
import Wrapper from "@/components/Wrapper";
import { RootState } from "@/store/store";
import { makePaymentRequest } from "@/utils/api";
import { STRIPE_API_TOKEN } from "@/utils/urls";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import Link from "next/link";
import React,{ useMemo, useState } from "react";
import { useSelector } from "react-redux";
const stripePromise = loadStripe(STRIPE_API_TOKEN as string);

const CartInterface = () => {
  const [loading, setLoading] = useState(false);
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const subTotal = useMemo(() => {
    return cartItems.reduce(
      (total: any, val: { attributes: { price: any } }) =>
        total + val.attributes.price,
      0
    );
  }, [cartItems]);

  const handlePayment = async () => {
    setLoading(true);

    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest("/api/orders", {
        products: cartItems,
      });

      await stripe?.redirectToCheckout({
        sessionId: res.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {cartItems.length > 0 && (
          <>
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Carro de compras
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 py-10">
              <div className="flex-[2]">
                <div className="text-lg font-bold">Artículos del carrito</div>
                {cartItems.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </div>

              <div className="flex-[1]">
                <div className="text-lg font-bold">Resumen</div>

                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                  <div className="flex justify-between">
                    <div className="uppercase text-md md:text-lg font-medium text-black">
                      Total parcial
                    </div>
                    <div className="text-md md:text-lg font-medium text-black">
                      S/{subTotal}
                    </div>
                  </div>
                  <div className="text-sm md:text-md py-5 border-t mt-5">
                    El subtotal refleja el precio total de su pedido, incluidos
                    aranceles e impuestos, antes de cualquier descuento
                    aplicable. No incluye gastos de envío e internacionales.
                    tarifas de transacción.
                  </div>
                </div>

                <button
                  className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                  onClick={handlePayment}
                >
                  Checkout
                  {loading && <img src="/spinner.svg" />}
                </button>
              </div>
            </div>
          </>
        )}

        {cartItems.length < 1 && (
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
            <Image
              src="/empty-cart.jpg"
              width={300}
              height={300}
              className="w-[300px] md:w-[400px]"
              alt="Carrito vacío"
              priority
            />
            <span className="text-xl font-bold">Tu carrito esta vacío</span>
            <span className="text-center mt-4">
              Parece que no has añadido nada a tu carrito.
              Continúe y explore las categorías principales.
            </span>
            <Link
              href="/catalogue/categories"
              className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
            >
              Continue shopping
            </Link>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default CartInterface;
