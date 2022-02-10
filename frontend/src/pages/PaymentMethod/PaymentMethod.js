import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePaymentMethod } from '../../actions/cartActions';
import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps';
import Header from '../../components/Header/Header';

const PaymentMethod = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const navigate = useNavigate();
  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/shipping', { replace: true });
    }
  }, []);

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
          <h3>Payment Method</h3>
        </div>

        <div className="form-control">
          <label htmlFor="paypal">PayPal</label>
          <input
            type="radio"
            id="paypal"
            value="PayPal"
            name="paymentMethod"
            checked={true}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="cod">Cash on delivery</label>
          <input
            type="radio"
            id="cod"
            value="Cash on delivery"
            name="paymentMethod"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
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
