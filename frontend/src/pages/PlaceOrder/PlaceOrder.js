import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createOrder } from '../../actions/orderAction';
import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps';
import Header from '../../components/Header/Header';
import { ORDER_CREATE_RESET } from '../../constants/orderConstants';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress, paymentMethod, cartItems } = cart;

  const navigate = useNavigate();
  useEffect(() => {
    if (!paymentMethod) {
      navigate('/payment', { replace: true });
    }
  });
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;

  // order summary calculation
  const toPrice = (num) => Number(num.toFixed(2));
  cart.itemPrice = toPrice(
    cartItems.reduce((a, c) => a + c.qty * c.varPrice, 0)
  );
  cart.shippingPrice = cart.itemPrice > 100 ? toPrice(40) : toPrice(0);
  cart.totalPrice = cart.itemPrice + cart.shippingPrice;

  // place order handler
  const dispatch = useDispatch();
  const placeOrderHandler = () => {
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
  };
  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, success, navigate, order]);
  return (
    <div>
      <Header />
      <CheckoutSteps step1 step2 step3 step4 />
      <div className="place-order-section container">
        <div className="col-1">
          {/* SHIPPING INFO */}
          <div className="card-body">
            <h3>Shipping</h3>
            <p>
              <strong>Name:</strong> {shippingAddress.fullName}
            </p>
            <p>
              <strong>Phone Number:</strong> {shippingAddress.phoneNumber}
            </p>
            <p>
              <strong>Address:</strong> {shippingAddress.address},{' '}
              {shippingAddress.city}, {shippingAddress.postalCode}
            </p>
          </div>

          {/* PAYMENT METHOD */}
          <div className="card-body">
            <h3>Payment</h3>
            <p>
              <strong>Method:</strong> {paymentMethod}
            </p>
          </div>

          {/* ORDER ITEMS */}
          <div className="card-body">
            <h3>Order Items</h3>
            <div className="cart-table-body">
              {cartItems.map((item) => {
                const {
                  name,
                  image,
                  varPrice,
                  varName,
                  variation,
                  product,
                  qty,
                } = item;
                return (
                  <div key={product} className="order-table-row">
                    <div className="col-product-cont">
                      <img src={image} alt={name} />
                      <div>
                        <Link to={`/products/${product}`}>
                          <h4>{name}</h4>
                        </Link>
                        {/* <p className="product-sched">
                          Delivery Date: 02/02/2022 <br />
                          Delivery Time: 11am
                        </p> */}
                      </div>
                    </div>
                    <div className="col-variation-cont">
                      <p className="var-text">
                        <span>{variation}: </span>
                        {varName}
                      </p>
                    </div>
                    <div className="col-price">
                      {qty} x <span className="peso-sign">&#8369;</span>
                      {varPrice}.00 = <span className="peso-sign">&#8369;</span>
                      {qty * varPrice}.00
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="card-body">
            <h3>Order Summary</h3>
            <div className="row">
              <strong>Items</strong>
              <dir>
                <span className="peso-sign">&#8369;</span>
                {cart.itemPrice}.00
              </dir>
            </div>
            <div className="row">
              <strong>Shipping</strong>
              <dir>
                <span className="peso-sign">&#8369;</span>
                {cart.shippingPrice}.00
              </dir>
            </div>
            <div className="row order-total">
              <strong>Order Total</strong>
              <div>
                <span className="peso-sign">&#8369;</span>
                {cart.totalPrice}.00
              </div>
            </div>
            <button
              type="button"
              className="form-submit-btn"
              onClick={placeOrderHandler}
              disabled={cartItems.length === 0}
            >
              Place Order
            </button>
          </div>
          {loading && <div className="form-loading">Loading...</div>}
          {error && <p className="form-error-alert">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
