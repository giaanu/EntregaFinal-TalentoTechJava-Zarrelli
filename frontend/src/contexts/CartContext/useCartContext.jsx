import { createContext, useContext, useState } from "react";

// Crear el Contexto
const CartContext = createContext();

// Hook personalizado para usar el contexto
const useCartContext = () => useContext(CartContext);

// Proveedor del contexto
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });

  // Función para agregar productos
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Función que devuelve la cantidad de productos en el carrito
  const countItemsCart = () => cart.length;

  return (
    <CartContext.Provider value={{ cart, addToCart, countItemsCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default useCartContext;
export { CartProvider };