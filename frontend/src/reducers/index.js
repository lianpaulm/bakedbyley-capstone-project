import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { productListReducer } from './productListReducer';

export default combineReducers({
  productList: productListReducer,
  cart: cartReducer,
});
