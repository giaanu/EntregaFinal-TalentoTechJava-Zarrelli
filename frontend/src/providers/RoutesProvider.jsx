import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "../pages/Home/Home.jsx";
import Detail from '../pages/Detail/Detail.jsx';
import Cart from '../pages/Cart/Cart.jsx';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop.jsx';



const Nosotros = () => (
    <div style={{ padding: "4rem", color: "#e0e0e0", textAlign: "center" }}>
        <h1 style={{ color: "#00ADB5" }}>Sobre Nosotros</h1>
        <p style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
            Ocarina Store es una tienda especializada en productos de tecnología de alta gama.
            Ofrecemos los mejores componentes con garantía y atención personalizada.
        </p>
        <Link to="/" style={{ display: "inline-block", marginTop: "2rem", padding: "10px 24px", backgroundColor: "#00ADB5", color: "white", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" }}>
            ← Volver al inicio
        </Link>
    </div>
);

const Contacto = () => (
    <div style={{ padding: "4rem", color: "#e0e0e0", textAlign: "center" }}>
        <h1 style={{ color: "#00ADB5" }}>Contacto</h1>
        <p style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
            📧 contacto@ocarinastore.com<br />
            📞 +54 11 1234-5678<br />
            📍 Buenos Aires, Argentina
        </p>
        <Link to="/" style={{ display: "inline-block", marginTop: "2rem", padding: "10px 24px", backgroundColor: "#00ADB5", color: "white", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" }}>
            ← Volver al inicio
        </Link>
    </div>
);


const RoutesProvider = () => {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products/:id" element={<Detail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Routes>
            </Router>
        </>
    );
};

export default RoutesProvider;