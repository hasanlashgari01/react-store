import propTypes from "prop-types";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "./Product";

const configBreakpoints = {
    468: {
        slidesPerView: 2.2,
    },
    768: {
        slidesPerView: 2.8,
    },
    1024: {
        slidesPerView: 3.8,
    },
    1280: {
        slidesPerView: 4.2,
    },
    1536: {
        slidesPerView: 4.8,
    },
};

const ProductsSlider = ({ isIncredible, titleBox, linkBox, data }) => {
    return (
        <div className="pt-10 pb-20 bg-emerald-50">
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-5">
                        <span className="hidden md:inline-block w-2.5 aspect-square animate-pulse bg-emerald-500 rounded-full duration-500"></span>
                        <h1 className="text-emerald-700  md:text-xl">{titleBox}</h1>
                    </div>
                    <Link
                        to={`/${linkBox}`}
                        className="flex justify-center items-center gap-3 bg-emerald-50 py-2 px-3 text-xs md:text-sm rounded-lg"
                    >
                        <span>مشاهده</span>
                        <IoIosArrowBack size={14} />
                    </Link>
                </div>
                <div className="mt-8">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1.2}
                        breakpoints={configBreakpoints}
                        className="w-full h-full"
                    >
                        {data?.products?.map(product => (
                            <SwiperSlide key={product.id}>
                                <Product isIncredible={isIncredible} {...product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

ProductsSlider.propTypes = {
    isIncredible: propTypes.bool,
    titleBox: propTypes.string,
    linkBox: propTypes.string,
    data: propTypes.object,
};

export default ProductsSlider;
