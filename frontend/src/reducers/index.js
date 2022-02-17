import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderMineListReducer,
  orderPayReducer,
} from './orderReducer';
import { productListReducer } from './productListReducer';
import { userLoginReducer, userRegisterReducer } from './userReducer';

export default combineReducers({
  productList: productListReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderMineList: orderMineListReducer,
});
