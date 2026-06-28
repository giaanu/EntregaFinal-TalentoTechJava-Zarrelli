import CartContextProvider from "../contexts/CartContext/CartContextProvider.jsx";

const ContextsProvider = ({ children }) => {
    return(
        <CartContextProvider>
            {children}
        </CartContextProvider>
    );
};
export default ContextsProvider;