import axios from 'axios';
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from '../constants/userConstants';

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
  dispatch({ type: USER_LOGIN_LOGOUT });
};
