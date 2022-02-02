import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { addToCart } from '../../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';

// components
import Header from '../../components/Header/Header';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { RiH2 } from 'react-icons/ri';

const Carts = () => {
  const { id: productID } = useParams();
  const location = useLocation();
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productID) {
      dispatch(addToCart(productID, qty));
    }
  }, [dispatch, productID, qty]);

  return (
    <>
      <Header />
      <main>
        <Breadcrumbs title={'Your shopping cart'} />
        <section className="container">
          {cartItems.length === 0 && <h2>No cart items</h2>}
          {/* <h1>Cart page</h1>
          <p>Product ID: {productID}</p>
          <p>{qty}</p> */}
        </section>
      </main>
    </>
  );
};

export default Carts;
