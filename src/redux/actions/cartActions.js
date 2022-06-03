import { actionTypes } from "../constants/actionTypes";

export const addToCart = (product) => {
    return {
        type: actionTypes.ADDTOCART ,
        payload: product
    }
}