import CartFactorItem from "./CartFactorItem";

const CartFactor = ({ data }) => {
    const { itemsCounter, total, totalWithOff, totalOff } = data;

    return (
        <div className="lg:sticky top-36 shrink-0 w-full lg:w-72 h-fit p-5 border-2 rounded-xl">
            <h1 className="border-b pb-5 text-center text-xl">خلاصه فاکتور</h1>
            <ul className="grid grid-cols-1 gap-5 my-5">
                <CartFactorItem title="تعداد محصولات :" data={itemsCounter} />
                <CartFactorItem title="مجموع سبد خرید :" data={totalWithOff} />
                <CartFactorItem title="تخفیف :" data={totalOff} />
            </ul>
            <li className="flex justify-between border-t pt-5">
                <span>جمع کل :</span>
                <span>{total?.toLocaleString()}</span>
            </li>
        </div>
    );
};

export default CartFactor;
