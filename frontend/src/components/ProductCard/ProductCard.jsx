function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.imagen} alt={product.nombre} />
      <h2>{product.nombre}</h2>
      <p className="description">{product.descripcion}</p>
      <p className="price">${product.precio.toLocaleString("es-AR")}</p>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ProductCard;