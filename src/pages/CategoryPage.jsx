import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import Pagination from "../components/Pagination";

const CategoryPage = () => {
    const { code } = useParams();

    const [pages, setPages] = useState();
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState("1");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    `https://leverapi.f4rd1n.ir/api/digikala/categories/${code}/search?page=${currentPage}`
                );
                setProducts(response.data.results.products);
                setPages(response.data.results.pager.total_pages);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProducts();
    }, [currentPage]);

    return (
        <div className="container my-20">
            <h1 className="text-8xl">{products.title}</h1>
            <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10">
                {products.map(product => (
                    <Product key={product.id} {...product} />
                ))}
            </ul>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default CategoryPage;
