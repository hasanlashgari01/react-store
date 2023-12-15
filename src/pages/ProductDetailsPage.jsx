import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetailsPage = () => {
    const { id } = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios
            .get(`https://leverapi.f4rd1n.ir/api/digikala/product/${id}`)
            .then(res => setProduct(res))
            .catch(err => console.log(err));
    }, [id]);

    return <div>محصول - {id}</div>;
};

export default ProductDetailsPage;
