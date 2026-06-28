import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto o aumentar cantidad si ya existe
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, { ...product, cantidad: 1 }];
    });
  };

  // Cantidad total de items
  const countItemsCart = () => cart.reduce((acc, item) => acc + item.cantidad, 0);

  // Total en pesos
  const getTotalAmount = () =>
    cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  // Vaciar carrito
  const emptyCart = () => setCart([]);

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
};

  return (
    <CartContext.Provider value={{ cart, addToCart, countItemsCart, getTotalAmount, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default useCartContext;
export { CartProvider };