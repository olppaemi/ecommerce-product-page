import useCart from "hooks/useCart";
import { createContext, FC, useContext } from "react";

type CartContextValue = ReturnType<typeof useCart>;

const CartContext = createContext({} as CartContextValue);

type CartProviderProps = {
  useCartHook?: typeof useCart;
};

export const CartProvider: FC<CartProviderProps> = ({
  children,
  useCartHook = useCart,
}) => {
  const value = useCartHook();

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
