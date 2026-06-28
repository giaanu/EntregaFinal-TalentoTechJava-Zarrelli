import useCartContext from "../../contexts/CartContext/useCartContext.jsx";
import "./CartItem.css";

const CartItem = ({ item }) => {
    const {itemQuantityIncreaseById, itemQuantityDecreaseById, deleteItemById} = useCartContext();

    return (
        <div className="cartItem">
            <div className="item-img-container">
                <img src={item.imageUrl} alt="" />
            </div>
            <div className="item-info-container">
                <span>{item.description}</span>
                <button onClick={() => deleteItemById(item.id)}>Eliminar</button>
            </div>
            <div className="item-quantity-container">
                <div className="border-buttons">
                    <button onClick={() => itemQuantityDecreaseById(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => itemQuantityIncreaseById(item.id)}>+</button>
                </div>
            </div>
            <div className="item-subtotal-container">
                <span>u$s {item.subtotal.toFixed(2)}</span>
            </div>

        </div>
    );
};
export default CartItem;