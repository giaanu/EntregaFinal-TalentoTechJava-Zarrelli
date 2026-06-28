import useCartContext from "../../contexts/CartContext/useCartContext";
import CartItem from "../../components/CartItem/CartItem";
import './CartItemContainer.css';

const CartItemContainer = () => {
    const { cart, getTotalAmount, emptyCart} = useCartContext();

    return (
        <section className="cart-item-section">
            <div className="cart-item-container">
                {cart.length > 0
                    ? cart.map(item =>
                        <CartItem key={item.id} item={item} />
                    )
                    : <h2>No hay productos en el carrito</h2>
                }
            </div>
            <div className="purchase-summary-container">
                <span>TOTAL</span>
                <span>u$s {getTotalAmount().toFixed(2)}</span>
            </div>
            {
                cart.length > 0 &&
                <div className="cart-actions-container">
                    <button className="empty-cart-btn" onClick={() => emptyCart()}>Vaciar carrito</button>
                    <button className="finalize-purchase-btn" onClick={() => {
                        alert("Gracias por su compra, en breve nuestro equipo de ventas le enviara un mail confirmando el pedido");
                        emptyCart();
                    }}>Finalizar compra</button>
                </div>
            }
        </section>
    );
}
export default CartItemContainer;