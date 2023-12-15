const sumProducts = products => {
    const itemsCounter = products.reduce((counter, product) => counter + product.quantity, 0);
    const totalWithOff = products.reduce((total, product) => total + product.price.prev_price * product.quantity, 0);
    const totalOff = products.reduce(
        (total, product) => total + (product.price.prev_price - product.price.current_price) * product.quantity,
        0
    );
    const total = products.reduce((total, product) => total + product.price.current_price * product.quantity, 0);

    return { itemsCounter, totalWithOff, totalOff, total };
};

const setToLocalStorage = result => {
    localStorage.setItem("cart", JSON.stringify(result));
};

export { sumProducts, setToLocalStorage };
