import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { detailsOrder } from '../../actions/orderAction';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';

const Order = () => {
  const { id: orderId } = useParams();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  console.log(order);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsOrder(orderId));
  }, [dispatch, orderId]);

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
                Delivered at {order.deliveredAt}
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
              <p className="form-error-alert-success">Paid at {order.paidAt}</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
