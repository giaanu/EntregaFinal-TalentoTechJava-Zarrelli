import { useEffect, useState } from 'react';
import { CartContext } from './CartContext';

const CartContextProvider = ({ children }) => {

    /* ------------------- Obtiene carrito desde localStorage ------------------- */
    const getCartFromLocalStorage = () => {
        const data = localStorage.getItem('cart');
        console.log('Obteniendo carrito del localStorage');
        return data ? JSON.parse(data) : [];
    };


    /* -------------------- Guarda el carrito en localStorage ------------------- */
    const saveCartToLocalStorage = (cart) => {
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Carrito guardado en localStorage', cart);
    };


    /* ------------------------ Agrega un item al carrito ----------------------- */
    const addToCart = (product) => {
        if (!cart.some(prod => prod.id === product.id)) {
            const newProduct = { ...product, quantity: 1, subtotal: product.price };
            setCart((prevCart) => [...prevCart, newProduct]);
        }
        else {
            const updatedCart = cart.map(prod =>
                prod.id === product.id
                    ? {
                        ...prod,
                        quantity: prod.quantity + 1,
                        subtotal: prod.subtotal + product.price
                    }
                    : prod
            );
            setCart(updatedCart);
        }
    };


    /* ------------------- Borra un item del carrito por su id ------------------ */
    const deleteItemById = (id) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
    };


    /* ----------------------- Vacia el carrito de compras ---------------------- */
    const emptyCart = () => {
        setCart([]);
    };


    /* ---------------- Cuenta la cantidad de items en el carrito --------------- */
    const countItemsCart = () => {
        return cart.length;
    };

    /* -------- Incrementa la cantidad de un item en el carrito por su id ------- */
    const itemQuantityIncreaseById = (id) => {
        const updatedCart = cart.map(prod =>
            prod.id === id
                ? {
                    ...prod,
                    quantity: prod.quantity + 1,
                    subtotal: (prod.quantity + 1) * prod.price
                }
                : prod
        );

        setCart(updatedCart);
    }

    /* -------- Decrementa la cantidad de un item en el carrito por su id ------- */
    const itemQuantityDecreaseById = (id) => {
        const existingItem = cart.find(item => item.id === id);

        if (!existingItem || existingItem.quantity <= 1)
            return;

        const updatedCart = cart.map(prod =>
            prod.id === id && prod.quantity > 1
                ? {
                    ...prod,
                    quantity: prod.quantity - 1,
                    subtotal: (prod.quantity - 1) * prod.price
                }
                : prod
        );

        setCart(updatedCart);
    }


    /* -------------------- Calcula el monto total del carrito ------------------- */
    const getTotalAmount = () => {
        return cart.reduce((subtotal, item) => subtotal += item.subtotal, 0);
    };


    const [cart, setCart] = useState(getCartFromLocalStorage);

    useEffect(() =>
        saveCartToLocalStorage(cart),
        [cart]);

    const values = {
        cart,
        addToCart,
        deleteItemById,
        countItemsCart,
        getTotalAmount,
        emptyCart,
        itemQuantityIncreaseById,
        itemQuantityDecreaseById
    };

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}
export default CartContextProvider;