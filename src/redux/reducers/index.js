import { combineReducers } from "redux";
import {productReducer} from './productReducer';
import {selectedProductReducer} from './selectedProductReducer';
import {loginReducer} from './loginReducer';
import {cartReducer} from './cartReducer';

const reducers = combineReducers({
    allProducts: productReducer,
    selectedProduct: selectedProductReducer,
    login: loginReducer,
    cart: cartReducer,
})

export default reducers;