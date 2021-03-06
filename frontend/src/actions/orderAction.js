import axios from 'axios';
import {
  CART_EMPTY,
  ORDER_ADMIN_LIST_FAIL,
  ORDER_ADMIN_LIST_REQUEST,
  ORDER_ADMIN_LIST_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DELIVER_FAIL,
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_MINE_LIST_FAIL,
  ORDER_MINE_LIST_REQUEST,
  ORDER_MINE_LIST_SUCCESS,
  ORDER_PAY_COD_FAIL,
  ORDER_PAY_COD_REQUEST,
  ORDER_PAY_COD_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
} from '../constants/orderConstants';

export const createOrder = (order) => async (dispatch) => {
  dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
  try {
    const { data } = await axios.post('/api/v1/orders', order);
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.order });
    dispatch({ type: CART_EMPTY });
    localStorage.removeItem('cartItems');
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const detailsOrder = (orderId) => async (dispatch) => {
  dispatch({ type: ORDER_DETAILS_REQUEST, payload: orderId });
  try {
    const { data } = await axios.get(`/api/v1/orders/${orderId}`);
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data.order });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_DETAILS_FAIL, payload: message });
  }
};

export const payOrder = (order, paymentResult) => async (dispatch) => {
  dispatch({ type: ORDER_PAY_REQUEST, payload: { order, paymentResult } });
  try {
    const { data } = axios.put(
      `/api/v1/orders/${order._id}/pay`,
      paymentResult
    );
    dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_PAY_FAIL, payload: message });
  }
};

export const deliverOrder = (orderId) => async (dispatch) => {
  dispatch({ type: ORDER_DELIVER_REQUEST, payload: orderId });
  try {
    const { data } = axios.put(`/api/v1/orders/${orderId}/deliver`, {});
    dispatch({ type: ORDER_DELIVER_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_DELIVER_FAIL, payload: message });
  }
};

export const payCodOrder = (orderId) => async (dispatch) => {
  dispatch({ type: ORDER_PAY_COD_REQUEST, payload: orderId });
  try {
    const { data } = axios.put(`/api/v1/orders/${orderId}/paycod`, {});
    dispatch({ type: ORDER_PAY_COD_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_PAY_COD_FAIL, payload: message });
  }
};

export const listOrderMine = () => async (dispatch) => {
  dispatch({ type: ORDER_MINE_LIST_REQUEST });
  try {
    const { data } = await axios.get('/api/v1/orders/mine');
    dispatch({ type: ORDER_MINE_LIST_SUCCESS, payload: data.orders });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_MINE_LIST_FAIL, payload: message });
  }
};

// ADMIN
export const listOrderAdmin = () => async (dispatch) => {
  dispatch({ type: ORDER_ADMIN_LIST_REQUEST });
  try {
    const { data } = await axios.get('/api/v1/orders/admin');
    dispatch({ type: ORDER_ADMIN_LIST_SUCCESS, payload: data.orders });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_ADMIN_LIST_FAIL, payload: message });
  }
};
