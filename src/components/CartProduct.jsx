import propTypes from "prop-types";
import CartProductButton from "./CartProductButton";
import ProductPrice from "./ProductPrice";

const CartProduct = data => {
    const { id, image, title_fa, price, quantity } = data;

    return (
        <div className="flex flex-col lg:flex-row lg:gap-5 h-min px-5 select-none border-2 rounded-xl">
            <div className="max-lg:self-center w-40 h-40 shrink-0 overflow-hidden">
                <img src={image} alt="" className="h-full object-contain" />
            </div>
            <div className="flex flex-1 flex-col justify-between my-3">
                <p className="h-[52px] text-sm lg:text-base line-clamp-2 leading-6">{title_fa}</p>
                <div className="flex flex-col-reverse lg:flex-row gap-y-3 justify-between lg:items-center">
                    <CartProductButton data={data} quantity={quantity} />
                    <ProductPrice price={price} />
                </div>
            </div>
        </div>
    );
};

CartProduct.propTypes = {
    isIncredible: propTypes.bool,
    id: propTypes.number,
    image: propTypes.string,
    title_fa: propTypes.string,
    price: propTypes.object,
};

export default CartProduct;
