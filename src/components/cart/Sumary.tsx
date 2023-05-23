interface Props {
  subTotal: number;
}

const CartSummary: React.FC<Props> = ({ subTotal }) => {
  return (
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
          El subtotal refleja el precio total de su pedido, incluidos aranceles
          e impuestos, antes de cualquier descuento aplicable. No incluye gastos
          de envío e internacionales. tarifas de transacción.
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
