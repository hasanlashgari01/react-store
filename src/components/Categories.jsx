import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
    return (
        <div className="container">
            <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 2xl:grid-cols-8 gap-3 py-4 my-5">
                {categories?.map(({ id, title_fa, logo, top_product_image, code }) => (
                    <Link
                        key={id}
                        to={`category/${code}`}
                        className="flex flex-col items-center gap-5 py-5 px-2 w-auto h-fit md:h-full sm: bg-emerald-50 rounded-xl"
                    >
                        <img src={logo || top_product_image} alt={title_fa} className="w-16 lg:w-24 aspect-square" />
                        <h3 className="text-xs sm:text-sm lg:text-base text-center">{title_fa}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
};

Categories.propTypes = {
    categories: propTypes.array,
};

export default Categories;
