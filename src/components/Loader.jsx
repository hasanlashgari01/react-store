import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className="fixed flex justify-center items-center bg-slate-50 inset-0 mt-16 z-50">
            <RotatingLines width="100px" height="100px" strokeWidth="3" strokeColor="#10b981" />
        </div>
    );
};

export default Loader;
