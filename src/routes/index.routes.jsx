import NotFoundPage from "../pages/404";
import CartPage from "../pages/CartPage.jsx";
import CategoryPage from "../pages/CategoryPage";
import HomePage from "../pages/HomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage";

export const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/category/:code", element: <CategoryPage /> },
    { path: "/products", element: <ProductsPage /> },
    { path: "/product/:id", element: <ProductDetailsPage /> },
    { path: "/cart", element: <CartPage /> },
    { path: "/*", element: <NotFoundPage /> },
];
