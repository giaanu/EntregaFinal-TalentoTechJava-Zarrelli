import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../Services/ProductService";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ProductList.css";


const ProductList = () => {
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1);

    const handleFetch = async () => {
        const data = await getAllProducts(page);

        if (data.length > 0) {
            setProducts(data);
        }
        else if (page > 1) {
            setPage(page - 1);
        }
    }

    useEffect(() => {
        handleFetch();
    }, [page])

    return (
        <section className="product-list-section">
            <div className="product-list-container">
                {products.map(product =>
                    <Link key={product.id} to={`/products/${product.id}`}>
                        <ProductCard product={product} />
                    </Link>
                )}
            </div>
            <div className="product-list-pagination-container">
                <button onClick={() => page > 1 && setPage(page - 1)}>Anterior</button>
                <span>{page}</span>
                <button onClick={() => setPage(page + 1)}>Siguiente</button>
            </div>
        </section>
    );
}
export default ProductList