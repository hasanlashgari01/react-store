import { Link } from "react-router-dom";

const RecommendationProducts = ({ id, top_product_image, title_fa, price }) => {
  return (
    <Link to={`product/${id}`} className="flex flex-row sm:flex-col gap-3 border p-3 rounded-lg">
      <div className="flex justify-center items-center w-28 sm:w-full h-full sm:h-32">
        <img src={top_product_image} alt="" className="max-sm:w-full sm:h-full object-cover sm:justify-self-center" />
      </div>
      <div className="flex-1 mt-3">
        <h1 className="text-base line-clamp-2">{title_fa}</h1>
        <div className="flex flex-col mt-3" dir="ltr">
          <span>{price && price.current_price.toLocaleString()}</span>
          <span className="line-through text-gray-300 text-sm">{price && price.prev_price.toLocaleString()}</span>
        </div>
      </div>
    </Link>
  );
};

export default RecommendationProducts;
