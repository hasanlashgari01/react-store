import { useEffect, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import useProducts from "../hooks/useProducts.jsx";

const Banners = () => {
    const data = useProducts();

    const [banners, setBanners] = useState([]);
    const [latestBanners, setLatestBanners] = useState([]);

    useEffect(() => {
        setBanners(data.banners?.slice(0, -2));
        setLatestBanners(data.banners?.slice(-2));
    }, [data]);

    return (
        <div className="container flex flex-col lg:flex-row gap-5 sm:gap-8 mb-20 lg:h-96">
            <div className="w-full lg:w-2/3 h-60 lg:h-auto rounded-2xl overflow-hidden">
                <Swiper spaceBetween={50} slidesPerView={1} className="w-full h-full">
                    {banners?.map(({ id, image }) => (
                        <SwiperSlide key={id} className="w-full h-full rounded-2xl overflow-hidden">
                            <img
                                src={image}
                                alt=""
                                className="h-full lg:w-full object-cover object-[72%] sm:object-[65%] md:object-center lg:object-[70%] xl:object-[65%]"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="hidden lg:flex flex-col gap-5 w-full lg:w-1/3 h-auto">
                {latestBanners?.map(({ id, image }) => (
                    <img
                        key={id}
                        src={image}
                        alt=""
                        className="w-full h-full object-cover object-[65%] rounded-2xl"
                    />
                ))}
            </div>
        </div>
    );
};

export default Banners;
