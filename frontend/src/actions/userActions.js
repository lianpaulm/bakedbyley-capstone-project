import axios from 'axios';
import {
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
} from '../constants/userConstants';

export const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post('/api/v1/register', {
      name,
      email,
      password,
    });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data.user });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data.user });
    localStorage.setItem('userInfo', JSON.stringify(data.user));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post('/api/v1/login', { email, password });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data.user });
    localStorage.setItem('userInfo', JSON.stringify(data.user));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems');
  localStorage.removeItem('shippingAddress');
  dispatch({ type: USER_LOGOUT });
  document.location.href = '/login';
};

export const listUser = () => async (dispatch) => {
  dispatch({ type: USER_LIST_REQUEST });
  try {
    const { data } = await axios.get('/api/v1/admin/users');
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
