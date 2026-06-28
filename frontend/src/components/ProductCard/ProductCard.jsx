function ProductCard({ product, addToCart }) {
  if (!product) return null;

  return (
    <div className="product-card">
      <img src={product.imagen} alt={product.nombre} />
      <h2>{product.nombre}</h2>
      <p className="description">{product.descripcion}</p>
      <p className="price">${product.precio?.toLocaleString("es-AR")}</p>
      <button onClick={() => addToCart && addToCart(product)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;