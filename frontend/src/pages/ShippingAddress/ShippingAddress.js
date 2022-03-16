import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveShippingAddress } from '../../actions/cartActions';
import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps';
import Header from '../../components/Header/Header';
import './Checkout.css';

const ShippingAddress = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const navigate = useNavigate();
  // if not login - redirect to login page
  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  }, [navigate, userInfo]);

  const [fullName, setFullName] = useState(shippingAddress.fullName || '');
  const [phoneNumber, setPhoneNumber] = useState(
    shippingAddress.phoneNumber || ''
  );
  const [address, setAddress] = useState(shippingAddress.address || '');
  const [city, setCity] = useState(shippingAddress.city || '');
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ''
  );

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
      <form className="form checkout-form" onSubmit={submitHandler}>
        <div>
          <h3>Shipping Address</h3>
        </div>
        <div className="form-control">
          <label htmlFor="fullName">Full Name</label>
          <input
            required
            type="text"
            id="fullName"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            required
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
            required
            type="text"
            id="address"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="city">City</label>
          <select
            required
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="" disabled selected style={{ color: 'grey' }}>
              Select your city
            </option>
            <option value="Quezon City">Quezon City</option>
            <option value="Caloocan">Caloocan</option>
            <option value="Makati">Makati</option>
            <option value="Malabon">Malabon</option>
            <option value="Mandaluyong">Mandaluyong</option>
            <option value="Manila">Manila</option>
            <option value="Marikina">Marikina</option>
            <option value="Navotas">Navotas</option>
            <option value="Paranaque">Paranaque</option>
            <option value="Pasay">Pasay</option>
            <option value="Pasig">Pasig</option>
            <option value="Taguig">Taguig</option>
            <option value="Valenzuela">Valenzuela</option>
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            required
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
