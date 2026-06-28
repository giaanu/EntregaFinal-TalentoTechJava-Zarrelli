import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/ProductService.js";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import "./ProductDetailContainer.css";

const ProductDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    const handleFetch = async (id) => {
        const data = await getProductById(id);
        setProduct(data);
    }

    useEffect(() => {
        handleFetch(id);
    }, []);

    return (
        <>
            {product
                ? (<ProductDetail product={product} />)
                : (<span>Cargando...</span>)
            }
        </>
    );
}
export default ProductDetailContainer;