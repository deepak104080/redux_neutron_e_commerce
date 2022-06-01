import { actionTypes } from "../constants/actionTypes";

export const setProducts = (response) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: response
    }
}