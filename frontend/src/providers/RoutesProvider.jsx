import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home/Home.jsx";
import Detail from '../pages/Detail/Detail.jsx';
import Cart from '../pages/Cart/Cart.jsx';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop.jsx';

const RoutesProvider = () => {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products/:id" element={<Detail />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Router>
        </>
    );
};
export default RoutesProvider;