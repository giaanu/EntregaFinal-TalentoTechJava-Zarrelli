import { useState } from "react";
import { Link } from "react-router-dom";
import useCartContext from "../../contexts/CartContext/useCartContext.jsx";
import "./Header.css";

const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const { countItemsCart } = useCartContext();

    return (
        <header>
            <div className="header-logo-container">
                <Link to="/"><img src="/src/assets/img/icono.png" alt="" /></Link>
            </div>

            <nav>
                <ul className={isMenuActive ? "menu-active" : "menu-inactive"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Nosotros</Link></li>
                    <li><Link to="/">Contacto</Link></li>
                    <li className="nav-hidden-link"><Link to="/cart">Carrito</Link></li>
                    <li className="nav-hidden-link"><Link to="/">Login</Link></li>
                </ul>
            </nav>

            <div className="header-aux-container">
                <div className="header-cart-button-container">
                    <Link to="/cart">
                        <div className="link-button ">
                            <span>Carrito</span>
                            {countItemsCart() > 0 &&
                                <span className="cart-item-counter">{countItemsCart()}</span>
                            }
                        </div>
                    </Link>
                </div>

                <div className="header-login-button-container">
                    <Link to="/">
                        <div className="link-button ">Login</div>
                    </Link>
                </div>
            </div>

            <div className="burger-btn-container">
                <button
                    className="burger-btn"
                    onClick={() => setIsMenuActive(!isMenuActive)}>&#9776;
                </button>
            </div>
        </header>
    );
};
export default Header;