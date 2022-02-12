import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePaymentMethod } from '../../actions/cartActions';
import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps';
import Header from '../../components/Header/Header';
import { HiOutlineCash } from 'react-icons/hi';
import { BsPaypal } from 'react-icons/bs';

const PaymentMethod = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const navigate = useNavigate();
  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/shipping', { replace: true });
    }
  });

  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));

    navigate('/placeorder');
  };

  return (
    <div>
      <Header />
      <CheckoutSteps step1 step2 step3 />
      <form className="form checkout-form" onSubmit={submitHandler}>
        <div>
          <h3>Select payment method</h3>
        </div>

        <div className="form-control form-control-payment ">
          <label htmlFor="paypal" className="payment-label">
            <div>
              <BsPaypal className="paypal-icon" />
              PayPal
              <input
                id="paypal"
                type="radio"
                value="PayPal"
                name="paymentMethod"
                checked={true}
                required
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className="payment-label-overlay"></span>
            </div>
            <p>PayPal account required</p>
          </label>
        </div>

        <div className="form-control form-control-payment ">
          <label className="payment-label">
            <div>
              <HiOutlineCash />
              Cash on delivery
              <input
                type="radio"
                value="Cash on delivery"
                name="paymentMethod"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className="payment-label-overlay"></span>
            </div>
            <p>Pay when you receive</p>
          </label>
        </div>
        <div className="form-control">
          <button type="submit" className="form-submit-btn">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentMethod;
