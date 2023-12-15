import { CiDark, CiLight } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import useTheme from "../hooks/useTheme.jsx";

const MobileTabs = () => {
    const [theme, setTheme, themeHandler] = useTheme();

    return (
        <ul className="lg:hidden fixed bottom-0 right-0 left-0 flex w-full py-4 bg-white select-none shadow-2xl shadow-amber-950 z-50 child:tab__btn">
            <NavLink to="/">
                <IoHomeOutline className="tab__icon" />
                <span>خانه</span>
            </NavLink>
            <span>
                <RxHamburgerMenu className="tab__icon" />
                <span>دسته‌بندی</span>
            </span>
            <span>
                <IoIosSearch className="tab__icon" />
                <span>جستجو</span>
            </span>
            <span onClick={themeHandler}>
                {theme === "light" ? <CiDark className="tab__icon" /> : <CiLight className="tab__icon" />}
                <span>{theme === "light" ? "تاریک" : "روشن"}</span>
            </span>
        </ul>
    );
};

export default MobileTabs;
