import CartItem from "@/components/cart/CartItem";
import { CartItemInterface } from "@/models/cart.model";
import { QuotationItemInterface } from "@/models/quotation.model";
  
interface Props {
  cartItems: CartItemInterface[] | QuotationItemInterface[];
}

const CartItemsList: React.FC<Props> = ({ cartItems }) => {
  
  return (
    <div className="flex-[2]">
      <div className="text-lg font-bold">Artículos:</div>
      {cartItems.map((item) => (
        <CartItem key={item.productId} data={item} />
      ))}
    </div>
  );
};

export default CartItemsList;
