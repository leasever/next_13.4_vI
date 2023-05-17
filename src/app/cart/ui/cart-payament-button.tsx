import { CartInterface } from "@/models/cart.model";
import { makePaymentRequest } from "@/utils/api";
import { STRIPE_API_TOKEN } from "@/utils/urls";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

const stripePromise = loadStripe(STRIPE_API_TOKEN as string);

const PaymentButton = ({ items }: CartInterface) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest("/api/orders", {
        products: items,
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
    <button
      className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
      onClick={handlePayment}
    >
      Checkout
      {loading && <img src="/spinner.svg" />}
    </button>
  );
};

export default PaymentButton;
