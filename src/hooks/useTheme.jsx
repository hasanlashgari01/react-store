import {useState} from "react";

const useTheme = () => {
    const [theme, setTheme] = useState("light");

    const themeHandler = () => {
      theme === "light" ? setTheme("dark") : setTheme("light")
    }

    return [theme, setTheme, themeHandler];
};

export default useTheme;
