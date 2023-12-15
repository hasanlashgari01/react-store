import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const useProducts = () => {
    const products = useContext(ProductContext);

    return products;
};

export default useProducts;
