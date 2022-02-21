import axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { detailsOrder, payOrder } from '../../actions/orderAction';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
import { ORDER_PAY_RESET } from '../../constants/orderConstants';

const Order = () => {
  const { id: orderId } = useParams();

  const [sdkReady, setSdkReady] = useState(false);
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const {
    loading: loadingPay,
    error: errorPay,
    success: successPay,
  } = orderPay;

  const dispatch = useDispatch();
  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await axios.get('/api/v1/config/paypal');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!order || successPay || (order && order._id !== orderId)) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(detailsOrder(orderId));
    } else {
      if (!order.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [dispatch, orderId, sdkReady, order, successPay]);

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  };

  if (loading) {
    return (
      <>
        <Header />
        <main>
          <Loading />
        </main>
      </>
    );
  }
  if (error) {
    return (
      <>
        <Header />
        <main>{error && <p className="form-error-alert">{error}</p>}</main>
      </>
    );
  }

  return (
    <div>
      <Header />
      <div className="order-id container">
        <h1>Order ID: {order._id}</h1>
      </div>
      <div className="place-order-section container">
        <div className="col-1">
          {/* SHIPPING INFO */}
          <div className="card-body">
            <h3>Shipping</h3>
            <p>
              <strong>Name:</strong> {order.shippingAddress.fullName}
            </p>
            <p>
              <strong>Phone Number:</strong> {order.shippingAddress.phoneNumber}
            </p>
            <p>
              <strong>Address:</strong> {order.shippingAddress.address},{' '}
              {order.shippingAddress.city}, {order.shippingAddress.postalCode}
            </p>
            {order.isDelivered ? (
              <p className="form-error-alert-success">
                Delivered at {order.deliveredAt.substring(0, 10)}
              </p>
            ) : (
              <p className="form-error-alert-danger">Not Delivered</p>
            )}
          </div>

          {/* PAYMENT METHOD */}
          <div className="card-body">
            <h3>Payment</h3>
            <p>
              <strong>Method:</strong> {order.paymentMethod}
            </p>
            {order.isPaid ? (
              <p className="form-error-alert-success">
                Paid at {order.paidAt.substring(0, 10)}
              </p>
            ) : (
              <p className="form-error-alert-danger">Not Paid</p>
            )}
          </div>

          {/* ORDER ITEMS */}
          <div className="card-body">
            <h3>Order Items</h3>
            <div className="cart-table-body">
              {order.orderItems.map((item) => {
                const {
                  name,
                  image,
                  varPrice,
                  varName,
                  variation,
                  product,
                  qty,
                  deliveryDate,
                  deliveryTime,
                } = item;
                return (
                  <div key={product} className="order-table-row">
                    <div className="col-product-cont">
                      <img src={image} alt={name} />
                      <div>
                        <Link to={`/products/${product}`}>
                          <h4>{name}</h4>
                        </Link>
                        <p className="order-var-text">
                          <span>{variation}: </span>
                          {varName}
                        </p>
                      </div>
                    </div>
                    <div className="col-variation-cont">
                      <p className="product-sched">
                        <span>Delivery Date:</span> {deliveryDate} <br />
                        <span>Delivery Time:</span> {deliveryTime}
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
                {order.itemPrice}.00
              </dir>
            </div>
            <div className="row">
              <strong>Shipping</strong>
              <dir>
                <span className="peso-sign">&#8369;</span>
                {order.shippingPrice}.00
              </dir>
            </div>
            <div className="row order-total">
              <strong>Order Total</strong>
              <div>
                <span className="peso-sign">&#8369;</span>
                {order.totalPrice}.00
              </div>
            </div>
            {!order.isPaid && (
              <div>
                {!sdkReady ? (
                  <div className="form-loading">Loading...</div>
                ) : (
                  <>
                    {errorPay && (
                      <p className="form-error-alert-danger">{errorPay}</p>
                    )}
                    {loadingPay && (
                      <div className="form-loading">Loading...</div>
                    )}
                    <PayPalButton
                      amount={order.totalPrice}
                      onSuccess={successPaymentHandler}
                    />
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
// {loading && <div className="form-loading">Loading...</div>}
//           {error && <p className="form-error-alert">{error}</p>}
export default Order;
