import { Product } from "lib/types";
import { useEffect, useState } from "react";

const saveProducts = (products: Product[]) => {
  localStorage.setItem("products", JSON.stringify(products));
};

export default function useCart() {
  const [products, setProducts] = useState<Product[]>([]);

  const addToCart = (newProduct: Product) => {
    let newProducts: Product[] = [];
    if (products.find((product) => newProduct.name === product.name)) {
      newProducts = products.map((product) =>
        newProduct.name === product.name
          ? { ...product, quantity: product.quantity + newProduct.quantity }
          : product
      );
    } else {
      newProducts = [...products, newProduct];
    }
    setProducts(newProducts);
    saveProducts(newProducts);
  };

  const removeFromCart = (product: Product) => {
    const newProducts = products.filter((p) => p.name !== product.name);
    setProducts(newProducts);
    saveProducts(newProducts);
  };

  const clearCart = () => {
    setProducts([]);
    saveProducts([]);
  };

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    const parsedProducts = storedProducts ? JSON.parse(storedProducts) : [];
    setProducts(parsedProducts);
  }, []);

  return {
    products,
    addToCart,
    removeFromCart,
    clearCart,
  };
}
