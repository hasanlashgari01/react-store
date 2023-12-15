import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import propTypes from "prop-types";

const Pagination = ({ currentPage, setCurrentPage }) => {
    const pageHandler = e => {
        let type = e.target.dataset.type;

        if (!type) {
            setCurrentPage(e.target.innerHTML);
        } else {
            if (type === "next") {
                setCurrentPage(currentPage + 1);
            } else if (type === "prev") {
                setCurrentPage(currentPage - 1);
            }
        }
    };

    return (
        <ul className="pagination">
            <button className="item" data-type="prev" onClick={e => pageHandler(e)} disabled={currentPage <= 1 && true}>
                <IoIosArrowForward />
            </button>
            <span className="item" onClick={e => pageHandler(e)}>
                1
            </span>
            <span className="item" onClick={e => pageHandler(e)}>
                2
            </span>
            <span>..</span>
            {
                <span className="item border-white">
                    {currentPage == (100 | 99 | 1 | 2) ? currentPage + 1 : currentPage}
                </span>
            }
            <span>..</span>
            <span className="item" onClick={e => pageHandler(e)}>
                99
            </span>
            <span className="item" onClick={e => pageHandler(e)}>
                100
            </span>
            <button
                className="item"
                data-type="next"
                onClick={e => pageHandler(e)}
                disabled={currentPage >= 100 && true}
            >
                <IoIosArrowBack />
            </button>
        </ul>
    );
};

Pagination.propTypes = {
    currentPage: propTypes.string,
    setCurrentPage: propTypes.func,
};

export default Pagination;
