import CartFactor from "../components/CartFactor";
import CartProduct from "../components/CartProduct";
import { useCart } from "../context/CartContext";

const CartPage = () => {
    const [state] = useCart();

    return (
        <div className="container">
            <h1 className="text-3xl mb-5">سبد خرید</h1>
            <div className="flex flex-col lg:flex-row gap-10 mb-36">
                <ul className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-8">
                    {state?.selectedItems?.length == 0 ? (
                        <h1 className="flex justify-center items-center text-3xl text-center text-red-500 bg-red-50">
                            سبد خرید خالیه :(
                        </h1>
                    ) : (
                        state?.selectedItems?.map(product => <CartProduct key={product.id} {...product} />)
                    )}
                </ul>
                <CartFactor data={state} />
            </div>
        </div>
    );
};

export default CartPage;
