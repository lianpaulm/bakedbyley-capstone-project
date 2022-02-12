import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps';
import Header from '../../components/Header/Header';

const PlaceOrder = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress, paymentMethod, cartItems } = cart;

  console.log(cartItems);
  const navigate = useNavigate();
  useEffect(() => {
    if (!paymentMethod) {
      navigate('/payment', { replace: true });
    }
  });

  return (
    <div>
      <Header />
      <CheckoutSteps step1 step2 step3 step4 />
      <div className="row top">
        <div className="col-2">
          {/* SHIPPING INFO */}
          <div className="card-body">
            <h2>Shipping</h2>
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
            <h2>Payment</h2>
            <p>
              <strong>Method:</strong> {paymentMethod}
            </p>
          </div>

          {/* ORDER ITEMS */}
          <div className="card-body">
            <h2>Order Items</h2>
            {/* todo: price info */}
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default PlaceOrder;
