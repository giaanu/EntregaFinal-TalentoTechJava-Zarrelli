import { useState } from "react";
import useCartContext from "../../contexts/CartContext/useCartContext";
import CartItem from "../../components/CartItem/CartItem";
import './CartItemContainer.css';

const USUARIO_ID = 1;

const CartItemContainer = () => {
    const { cart, getTotalAmount, emptyCart } = useCartContext();
    const [mensaje, setMensaje] = useState("");

    const finalizarCompra = async () => {
        if (cart.length === 0) return;

        const lineas = cart.map((item) => ({
            productoId: item.id,
            cantidad: item.cantidad
        }));

        try {
            const response = await fetch(
                `http://localhost:8080/api/pedidos?usuarioId=${USUARIO_ID}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ lineas })
                }
            );

            if (response.ok) {
                emptyCart()
                alert("✓ Pedido realizado con éxito.");
            } else {
                const error = await response.json();
                setMensaje(`✗ Error: ${error.error}`);
            }
        } catch (err) {
            setMensaje("✗ No se pudo conectar con el servidor.");
        }
    };

    return (
        <section className="cart-item-section">
            {mensaje && <p style={{ textAlign: "center", marginTop: "1rem", fontSize: "1.2rem" }}>{mensaje}</p>}
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
                <span>${getTotalAmount().toLocaleString("es-AR")}</span>
            </div>
            {cart.length > 0 &&
                <div className="cart-actions-container">
                    <button className="empty-cart-btn" onClick={emptyCart}>
                        Vaciar carrito
                    </button>
                    <button className="finalize-purchase-btn" onClick={finalizarCompra}>
                        Finalizar compra
                    </button>
                </div>
            }
        </section>
    );
};

export default CartItemContainer;