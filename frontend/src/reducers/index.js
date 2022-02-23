import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import {
  orderAdminListReducer,
  orderCreateReducer,
  orderDeliverReducer,
  orderDetailsReducer,
  orderMineListReducer,
  orderPayCodReducer,
  orderPayReducer,
} from './orderReducer';
import { productListReducer } from './productListReducer';
import {
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
} from './userReducer';

export default combineReducers({
  productList: productListReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userList: userListReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderMineList: orderMineListReducer,
  orderAdminList: orderAdminListReducer,
  orderDeliver: orderDeliverReducer,
  orderPayCod: orderPayCodReducer,
});
