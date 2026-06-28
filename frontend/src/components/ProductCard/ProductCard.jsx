import "./ProductCard.css";

function ProductCard({ product, addToCart }) {
  if (!product) return null;

  return (
    <div className="product-card-container">
      <div className="prod-card-img-container">
        <img 
          src={product.imagen} 
          alt={product.nombre}
          style={{ width: "150px", height: "150px", objectFit: "contain" }}
        />
      </div>
      <div className="prod-card-description-container">
        <h2>{product.nombre}</h2>
        <p>{product.descripcion}</p>
        <span>${product.precio?.toLocaleString("es-AR")}</span>
        <button onClick={() => addToCart && addToCart(product)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductCard;