import { Button } from "components/common/Button/styles";
import { useCartContext } from "contexts/CartContext";
import { Product } from "lib/types";
import CartItem from "./CartItem";
import * as S from "./styles";

const Cart = () => {
  const { products } = useCartContext();

  return (
    <S.Cart>
      <S.CartHeader>Cart</S.CartHeader>
      {!products.length ? (
        <S.CartEmpty>Your cart is empty.</S.CartEmpty>
      ) : (
        <>
          <S.CartBody>
            {products.map((product: Product) => (
              <CartItem key={product.name} product={product} />
            ))}
            <Button>Checkout</Button>
          </S.CartBody>
        </>
      )}
    </S.Cart>
  );
};

export default Cart;
