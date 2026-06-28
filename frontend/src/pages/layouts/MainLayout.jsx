import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    );
}
export default MainLayout;