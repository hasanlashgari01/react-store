import propTypes from "prop-types";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const CartProductButton = ({ data, quantity }) => {
    const [state, dispatch] = useCart();

    const removeHandler = () => dispatch({ type: "REMOVE_ITEM", payload: data });
    const increaseHandler = () => dispatch({ type: "INCREASE", payload: data });
    const decreaseHandler = () => dispatch({ type: "DECREASE", payload: data });

    return (
        <div className="flex lg:justify-center items-center pt-3 gap-2 lg:gap-5 max-lg:border-t">
            <button
                className="bg-emerald-100 hover:bg-emerald-200 p-2 rounded-full transition-colors ease-linear"
                onClick={increaseHandler}
            >
                <FaPlus className="text-emerald-700 lg:text-xl" />
            </button>
            <span className="min-w-[24px] text-center text-lg">{quantity}</span>
            <button
                className={`p-2 rounded-full transition-colors ease-linear ${
                    quantity == 1 ? "bg-red-100 hover:bg-red-200" : "bg-emerald-100 hover:bg-emerald-200"
                }`}
                onClick={quantity == 1 ? removeHandler : decreaseHandler}
            >
                {quantity == 1 ? (
                    <FaTrash className="text-red-700 lg:text-xl" />
                ) : (
                    <FaMinus className="text-emerald-700 lg:text-xl" />
                )}
            </button>
        </div>
    );
};

CartProductButton.propTypes = {
    quantity: propTypes.number,
};

export default CartProductButton;
