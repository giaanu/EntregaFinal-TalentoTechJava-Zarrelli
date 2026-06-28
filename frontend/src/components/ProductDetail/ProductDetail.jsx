import useCartContext from "../../contexts/CartContext/useCartContext.jsx";
import "./ProductDetail.css";

const ProductDetail = ({ product }) => {
    const { addToCart } = useCartContext();

    return (
        <section className="product-detail-section">
            <div className="product-detail-img-container">
                <img src={product.imageUrl} alt="" />
            </div>
            <div className="product-detail-info-container">

                <h2>{product.description}</h2>
                <div className="info-container">
                    <label htmlFor="name">Producto</label>
                    <input type="text" name="name" id="name" value={product.name} disabled/>
                </div>
                <div className="info-container">
                    <label htmlFor="brand">Marca</label>
                    <input type="text" name="brand" id="brand" value={product.brand} disabled/>
                </div>
                <div className="info-container">
                    <label htmlFor="category">Categoria</label>
                    <input type="category" name="category" id="category" value={product.category} disabled/>
                </div>
                <div className="info-container">
                    <label htmlFor="price">Precio(USD)</label>
                    <input type="text" name="price" id="price" value={product.price.toFixed(2)} disabled/>
                </div>
                <div className="btn-container">
                    <button onClick={() => addToCart(product)}>
                        Agregr al carrito
                    </button>
                </div>
            </div>

        </section>
    );
}
export default ProductDetail;