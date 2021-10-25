import Delete from "components/icons/Delete";
import { useCartContext } from "contexts/CartContext";
import { Product } from "lib/types";
import * as S from "./styles";

const CartItem = ({ product }: CartItemProps) => {
  const { name, price, quantity, image } = product;
  const { removeFromCart } = useCartContext();
  return (
    <S.CartItem>
      <S.ProductImage>
        <img src={image} alt="name" />
      </S.ProductImage>
      <S.Product>
        <p>{name}</p>
        <p>
          ${dollarFormat(price)} x {quantity}{" "}
          <strong>${dollarFormat(price * quantity)}</strong>
        </p>
      </S.Product>
      <S.DeleteIcon onClick={() => removeFromCart(product)}>
        <Delete />
      </S.DeleteIcon>
    </S.CartItem>
  );
};

type CartItemProps = {
  product: Product;
};

const dollarFormat = (price: number) => {
  return price.toFixed(2);
};

export default CartItem;
