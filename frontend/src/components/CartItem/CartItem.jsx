import useCartContext from "../../contexts/CartContext/useCartContext.jsx";
import "./CartItem.css";

const CartItem = ({ item }) => {
    const { removeFromCart } = useCartContext();

    return (
        <div className="cartItem">
            <div className="item-img-container">
                <img src={item.imagen} alt={item.nombre} />
            </div>
            <div className="item-info-container">
                <span>{item.nombre}</span>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
            <div className="item-quantity-container">
                <div className="border-buttons">
                    <span>x{item.cantidad}</span>
                </div>
            </div>
            <div className="item-subtotal-container">
                <span>${(item.precio * item.cantidad).toLocaleString("es-AR")}</span>
            </div>
        </div>
    );
};

export default CartItem;