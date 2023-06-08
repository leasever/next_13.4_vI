import { CartInterface } from "@/models";
import { makePaymentRequest } from "@/utils/api";
import { notifyError } from "@/utils/notify-manager";
import { STRIPE_API_TOKEN } from "@/utils/urls";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(STRIPE_API_TOKEN as string);

export const payment = async ({ items }: CartInterface) => {
  try {
    const stripe = await stripePromise;
    const res = await makePaymentRequest("/api/orders", {
      products: items,
    });

    await stripe?.redirectToCheckout({
      sessionId: res.stripeSession.id,
    });
  } catch (error) {
    notifyError("No se puede completar la transacción");
  }
};
