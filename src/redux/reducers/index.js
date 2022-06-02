import { combineReducers } from "redux";
import {productReducer} from './productReducer';
import {selectedProductReducer} from './selectedProductReducer';
import {loginReducer} from './loginReducer';

const reducers = combineReducers({
    allProducts: productReducer,
    selectedProduct: selectedProductReducer,
    login: loginReducer,
})

export default reducers;