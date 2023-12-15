import Banners from "../components/Banners.jsx";
import Categories from "../components/Categories.jsx";
import Loader from "../components/Loader.jsx";
import ProductsSlider from "../components/ProductsSlider.jsx";
import useProducts from "../hooks/useProducts.jsx";

const HomePage = () => {
    const data = useProducts();

    return (
        <div className="mb-20">
            {!data.incredible && <Loader />}
            <Banners />
            <ProductsSlider
                isIncredible={true}
                titleBox="محصولات فروش ویژه"
                linkBox="products"
                data={data.incredible}
            />
            <Categories categories={data.categories} />
            <ProductsSlider titleBox="محصولات پیشنهادی" linkBox="products" data={data.bestSelling} />
            <Categories categories={data.recommendationSubCategories} />
        </div>
    );
};

export default HomePage;
