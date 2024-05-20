import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const addProduct = (product) => {
    if (!shoppingCart.some((item) => item.id === product.id)) {
      setShoppingCart([...shoppingCart, product]);
    } else {
      alert("Produto já adicionado ao carrinho");
    }
  };

  const removeProduct = (product) => {
    setShoppingCart(shoppingCart.filter((item) => item.id !== product.id));
  };

  const totalPrice =  shoppingCart.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartContext.Provider value={{ shoppingCart, addProduct, removeProduct, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
