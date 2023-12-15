import { Link } from "react-router-dom";

const SearchProduct = ({ id, title_fa, image, price, setSearchValue }) => {
    return (
        <li className="flex py-3 gap-5 w-full last:border-0">
            <div className="flex justify-center h-28 aspect-square py-2 shrink-0">
                <img src={image} alt="" className="h-full object-cover" />
            </div>
            <div className="flex flex-col justify-between py-0.5">
                <Link
                    to={`/product/${id}`}
                    className="h-[43.5px] text-sm line-clamp-2 leading-5"
                    onClick={() => setSearchValue("")}
                >
                    {title_fa}
                </Link>
                <div className="flex flex-col">
                    {price.prev_price && (
                        <span className="text-gray-400 text-xs">
                            <span className="line-through">{price.prev_price}</span>{" "}
                            تومان
                        </span>
                    )}
                    {price.current_price && (
                        <span className="text-sm text-emerald-700 leading-6">
                            {price.current_price.toLocaleString()} تومان
                        </span>
                    )}
                </div>
            </div>
        </li>
    );
};

export default SearchProduct;
