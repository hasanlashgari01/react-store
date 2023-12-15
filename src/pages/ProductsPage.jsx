import useProducts from "../hooks/useProducts";
import RecommendProducts from "../components/RecommendationProducts";

const ProductsPage = () => {
  const data = useProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {data.recommendationSubCategories?.map(product => (
        <RecommendProducts key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsPage;
