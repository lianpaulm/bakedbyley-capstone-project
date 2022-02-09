import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveShippingAddress } from '../../actions/cartActions';
import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps';
import Header from '../../components/Header/Header';

const ShippingAddress = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress } = cart;

  const navigate = useNavigate();
  // if not login - redirect to login page
  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  }, []);
  // if empty cart redirect to product page
  useEffect(() => {
    if (!cartItems.length) {
      navigate('/products');
    }
  }, []);

  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [phoneNumber, setPhoneNumber] = useState(shippingAddress.phoneNumber);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullName, phoneNumber, address, city, postalCode })
    );

    navigate('/payment');
  };
  return (
    <div>
      <Header />
      <CheckoutSteps step1 step2 />
      <form className="form" onSubmit={submitHandler} className="checkout-form">
        <div>
          <h3>Shipping Address</h3>
        </div>
        <div className="form-control">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label></label>
          <button type="submit" className="form-submit-btn">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddress;
