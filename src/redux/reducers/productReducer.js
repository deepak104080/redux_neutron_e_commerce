import { actionTypes } from "../constants/actionTypes";

const initialState = {
    products: []
}

export const productReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case actionTypes.SET_PRODUCTS:
            return {...state, products: payload}
        default:
            return state;
    }
}