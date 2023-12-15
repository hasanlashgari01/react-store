import { useRoutes } from "react-router-dom";
import { routes } from "./routes/index.routes";
import ProductProvider from "./context/ProductContext";
import Header from "./components/Header";
import MobileTabs from "./components/MobileTabs.jsx";
import CartProvider from "./context/CartContext";

export default function App() {
    const router = useRoutes(routes);

    return (
        <CartProvider>
            <ProductProvider>
                <Header />
                <div className="mt-6">{router}</div>
                <MobileTabs />
            </ProductProvider>
        </CartProvider>
    );
}
