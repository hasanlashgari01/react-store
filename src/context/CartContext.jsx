import propTypes from "prop-types";
import { createContext, useContext, useEffect, useReducer } from "react";
import { setToLocalStorage, sumProducts } from "../helpers/helper";

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    totalWithOff: 0,
    totalOff: 0,
    total: 0,
    checkout: false,
};
const reducer = (state, action) => {
    let isItemInBasket;
    let newSelectedItems;
    let index;
    let result;

    switch (action.type) {
        case "ADD_ITEM":
            isItemInBasket = state.selectedItems.find(item => item.id == action.payload.id);
            if (!isItemInBasket) {
                state.selectedItems.push({ ...action.payload, quantity: 1 });
            }
            result = { ...state, ...sumProducts(state.selectedItems), checkout: false };
            setToLocalStorage(result);
            return result;
        case "REMOVE_ITEM":
            newSelectedItems = state.selectedItems.filter(item => item.id != action.payload.id);
            result = { ...state, selectedItems: [...newSelectedItems], ...sumProducts(newSelectedItems) };
            setToLocalStorage(result);
            return result;
        case "INCREASE":
            index = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[index].quantity++;
            result = { ...state, ...sumProducts(state.selectedItems) };
            setToLocalStorage(result);
            return result;
        case "DECREASE":
            index = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[index].quantity--;
            result = { ...state, ...sumProducts(state.selectedItems) };
            setToLocalStorage(result);
            return result;
        case "CHECKOUT":
            return {
                selectedItems: [],
                checkout: true,
            };
        case "GET_FROM_LS":
            console.log(action.payload);
            return action.payload;
    }
};

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        let cartLS = JSON.parse(localStorage.getItem("cart"));
        cartLS && dispatch({ type: "GET_FROM_LS", payload: cartLS });
    }, []);

    return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

const useCart = () => {
    const { state, dispatch } = useContext(CartContext);

    return [state, dispatch];
};

CartProvider.propTypes = {
    children: propTypes.object,
};

export { useCart };
export default CartProvider;
