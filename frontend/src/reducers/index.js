import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { productListReducer } from './productListReducer';
import { userLoginReducer, userRegisterReducer } from './userReducer';

export default combineReducers({
  productList: productListReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});
