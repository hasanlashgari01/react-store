import propTypes from "prop-types";
import Toman from "/public/toman.svg";

const ProductPrice = ({ price }) => {
    return (
        <div className="flex gap-2 items-center">
            <div className="flex flex-col text-left">
                {price?.prev_price && (
                    <span className="text-gray-400 text-xs line-through">{price.prev_price.toLocaleString()}</span>
                )}
                {price?.current_price && (
                    <span className="text-emerald-700">{price.current_price.toLocaleString()}</span>
                )}
            </div>
            <img src={Toman} alt="تومان" className="w-5" />
        </div>
    );
};

ProductPrice.propTypes = {
    price: propTypes.object,
};

export default ProductPrice;
