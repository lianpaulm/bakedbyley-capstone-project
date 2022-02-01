import { combineReducers } from 'redux';
import { productListReducer } from './productListReducer';

export default combineReducers({
  productList: productListReducer,
});
