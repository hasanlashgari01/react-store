import propTypes from "prop-types";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ProductPrice from "./ProductPrice";

const Product = data => {
    const { isIncredible, id, image, title_fa, price } = data;
    const [state, dispatch] = useCart();

    const addCartHandler = () => {
        dispatch({ type: "ADD_ITEM", payload: data });
    };

    return (
        <div className="flex flex-col py-5 px-3 bg-white select-none rounded-xl shadow-md">
            <div className="relative self-center h-40">
                {isIncredible && (
                    <span className="absolute -left-7 bg-red-500 text-white py-1 px-2 text-xs rounded-full">
                        ٪{price.discount_percent} ویژه
                    </span>
                )}
                <img src={image} alt="" className="h-full object-cover bg-transparent" />
            </div>
            <div className="grid gap-8 mt-8">
                <Link to={`/product/${id}`} className="h-[52px] text-sm line-clamp-2 leading-6">
                    {title_fa}
                </Link>
                <div className="flex justify-between items-center">
                    <button
                        className="bg-emerald-100 hover:bg-emerald-200 p-2 rounded-full transition-colors ease-linear"
                        onClick={addCartHandler}
                    >
                        <IoCartOutline size={20} className="text-emerald-700" />
                    </button>
                    <ProductPrice price={price} />
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    isIncredible: propTypes.bool,
    id: propTypes.number,
    image: propTypes.string,
    title_fa: propTypes.string,
    price: propTypes.object,
};

export default Product;
