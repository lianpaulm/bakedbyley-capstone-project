import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { addToCart } from '../../actions/cartActions';
import { useDispatch } from 'react-redux';
import Header from '../../components/Header/Header';

const Carts = () => {
  const { id: productID } = useParams();
  const location = useLocation();
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productID) {
      dispatch(addToCart(productID, qty));
    }
  }, [dispatch, productID, qty]);

  return (
    <>
      <Header />
      <div>
        <h1>Cart page</h1>
        <p>Product ID: {productID}</p>
        <p>{qty}</p>
      </div>
    </>
  );
};

export default Carts;
