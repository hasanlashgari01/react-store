import { createContext, useEffect, useState } from "react";
import { api } from "../services/config";
import propTypes from "prop-types";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get("");
                setProducts(response);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProducts();
    }, []);

    return <ProductContext.Provider value={products}>{children}</ProductContext.Provider>;
};

ProductProvider.propTypes = {
    children: propTypes.array,
};

export default ProductProvider;
