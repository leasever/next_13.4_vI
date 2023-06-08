import { payment } from "@/app/catalogue/services";
import { CartInterface } from "@/models/cart.model";
import { useState } from "react";

const PaymentButton = ({ items }: CartInterface) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    await payment({ items });
    setLoading(false);
  };

  return (
    <>
      <button
        className="w-full py-4 rounded-full bg-[#1D1D1D] text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
        onClick={handlePayment}
      >
        Pagar
        {loading && <img src="/spinner.svg" loading="lazy" />}
      </button>
    </>
  );
};

export default PaymentButton;
