import axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';

export const addToCart = (productID, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/products/${productID}`);
  const { name, image, price, _id: product } = data.product;

  dispatch({
    type: CART_ADD_ITEM,
    payload: { name, image, price, product, qty },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
