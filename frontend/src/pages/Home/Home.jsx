import ProductList from "../../containers/ProductList/ProductList";
import MainLayout from "../layouts/MainLayout.jsx";
import "./home.css";

const Home = () => {
    return (
        <MainLayout>
            <section className="home-central-section-container">
                <div className="home-h1-container">
                    <h1>
                        Bienvenido a <span className="home-text-color-1">Ocarina Store</span><br />
                        La mejor tienda de <span className="home-text-color-2">internet</span>
                    </h1>
                    <p>Encontrá los mejores productos  con la mejor atención y garantía.</p>
                </div>
                <div className="home-central-img-container">
                   
                </div>
            </section>
            <ProductList />
        </MainLayout>
    );
}
export default Home;