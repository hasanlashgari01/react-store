import { useLayoutEffect, useState } from "react";

const CartFactorItem = ({ title, data }) => {
    const [isChange, setIsChange] = useState(false);

    useLayoutEffect(() => {
        setIsChange(true);

        setTimeout(() => {
            setIsChange(false);
        }, 3000);
    }, [data]);

    return (
        <li className="flex justify-between">
            <span>{title}</span>
            <span
                className={`px-1 rounded-md transition-colors ease-linear 
                    ${isChange && "bg-blue-700 text-white animate-pulse"}`}
            >
                {data?.toLocaleString()}
            </span>
        </li>
    );
};

export default CartFactorItem;
