import CartItem from "@/components/cart/CartItem";
import { CartItemInterface } from "@/models/cart.model";

interface Props {
  cartItems: CartItemInterface[];
}

const CartItemsList: React.FC<Props> = ({ cartItems }) => {
  return (
    <div className="flex-[2]">
      <div className="text-lg font-bold">Artículos del carrito</div>
      {cartItems.map((item) => (
        <CartItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export default CartItemsList;
