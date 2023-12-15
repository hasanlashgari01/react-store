import { useEffect, useRef } from "react";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Search from "./Search";

const Header = () => {
    const navRef = useRef();

    const [state] = useCart();

    useEffect(() => {
        const onScroll = e => {
            navRef.current.style.padding = e.target.documentElement.scrollTop > 100 ? "25px 50px" : "16px 24px";
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="sticky top-0 bg-white z-50">
            <nav
                className="flex justify-between items-center px-6 py-4 shadow-md transition-all ease-linear"
                ref={navRef}
            >
                <div className="flex items-center gap-5">
                    <span className="max-lg:hidden cursor-pointer">
                        <RxHamburgerMenu className="tab__icon" />
                    </span>
                    <NavLink to="/" className="hover:text-green-600 transition-colors">
                        لیون کامپیوتر
                    </NavLink>
                    <div>
                        <span>دسته بندی ها</span>
                    </div>
                </div>
                <div className="flex items-center gap-10">
                    <Search />
                    <NavLink to="/cart" className="relative">
                        <IoCartOutline
                            size={24}
                            className="hover:bg-slate-50 w-9 h-9 p-2 rounded-full transition-colors"
                        />
                        <span className="absolute -top-2 -left-2 bg-red-200 text-xs py-1 px-2 rounded-full">{state?.itemsCounter}</span>
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;
