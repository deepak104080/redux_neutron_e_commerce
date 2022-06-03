import { actionTypes } from "../constants/actionTypes";

export const cartReducer = (state = {}, action) => {
    const {type, payload} = action;
    switch(type) {
        case actionTypes.ADDTOCART :
            return {...state, ...payload}
        default:
            return state
    }
}