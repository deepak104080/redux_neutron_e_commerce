import { actionTypes } from "../constants/actionTypes";

const tempState = {
    products: []
}
export const cartReducer = (state = tempState, action) => {
    const {type, payload} = action;
    switch(type) {
        case actionTypes.ADDTOCART :
            console.log('state', state);
            let temp = [...state.products, payload];
            return {...state, products: temp}
        default:
            return state
    }
}