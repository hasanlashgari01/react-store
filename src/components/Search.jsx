import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import SearchProduct from "./SearchProduct";
import axios from "axios";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isShowResult, setIsShowResult] = useState(false);
    const [result, setResult] = useState([]);

    const searchHandler = searchQuery => {
        axios
            .get(`https://leverapi.f4rd1n.ir/api/digikala/search?q=${searchQuery}`)
            .then(res => setResult(res.data.results.products))
            .catch(err => console.log(err));
    };

    const handleKeyDown = e => {
        if (e.key === " " && searchQuery.trim() !== "") {
            searchHandler(searchQuery);
        }
    };

    return (
        <div className="relative">
            <label
                htmlFor="search"
                className="max-lg:hidden flex justify-between items-center gap-3 w-64 py-1 px-3 text-sm bg-gray-200 rounded-full"
            >
                <IoIosSearch className="tab__icon" />
                <input
                    type="text"
                    placeholder="به دنبال چه چیزی می‌گردید؟"
                    className="bg-transparent flex-1 py-1.5 outline-none"
                    value={searchQuery}
                    onFocus={() => setIsShowResult(true)}
                    onChange={e => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </label>
            {searchQuery.length > 1 && (
                <div className="absolute left-0 top-14 w-[400px] p-5 h-auto bg-white shadow-2xl rounded-lg overflow-hidden overflow-y-auto transition-all ease-linear">
                    <div className="flex justify-between items-center pb-2 border-b">
                        <span className="text-xs text-gray-400">{result.length} مورد یافت شد</span>
                        <span></span>
                    </div>
                    {result.length >= 1 ? (
                        <ul className="grid grid-cols-1 h-96 py-2 child:border-b child:border-gray-300">
                            {result.map(product => (
                                <SearchProduct key={product.id} {...product} setSearchValue={setSearchQuery} />
                            ))}
                        </ul>
                    ) : (
                        <h1 className="py-10 text-red-500 text-center">محصول مورد نظر یافت نشد</h1>
                    )}
                </div>
            )}
        </div>
    );
};

export default Search;
