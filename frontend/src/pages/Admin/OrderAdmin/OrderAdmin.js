import React, { useEffect } from 'react';
import HeaderAdmin from '../Header/HeaderAdmin';
import SidebarAdmin from '../Sidebar/SidebarAdmin';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  deliverOrder,
  detailsOrder,
  payCodOrder,
} from '../../../actions/orderAction';
import Loading from '../../../components/Loading/Loading';
import {
  ORDER_DELIVER_RESET,
  ORDER_PAY_COD_RESET,
} from '../../../constants/orderConstants';
import './OrderAdmin.css';

const OrderAdmin = () => {
  const { id: orderId } = useParams();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const {
    loading: loadingDeliver,
    error: errorDeliver,
    success: successDeliver,
  } = orderDeliver;

  const orderPayCod = useSelector((state) => state.orderPayCod);
  const {
    loading: loadingCodPay,
    error: errorCodPay,
    success: successCodPay,
  } = orderPayCod;

  const dispatch = useDispatch();
  useEffect(() => {
    if (
      !order ||
      successDeliver ||
      successCodPay ||
      (order && order._id !== orderId)
    ) {
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch({ type: ORDER_PAY_COD_RESET });
      dispatch(detailsOrder(orderId));
    }
  }, [dispatch, orderId, order, successDeliver, successCodPay]);

  const deliverHandler = () => {
    dispatch(deliverOrder(order._id));
  };

  const CodPayHandler = () => {
    dispatch(payCodOrder(order._id));
  };

  if (loading) {
    return (
      <>
        <HeaderAdmin />
        <main>
          <Loading />
        </main>
      </>
    );
  }

  return (
    <>
      <HeaderAdmin />
      <main>
        <div className="dashboard-container">
          <SidebarAdmin />
          <div className="order-admin-container">
            <div className="products-admin-header">
              <h3>Order Details</h3>
              <div className="order-id-admin">
                <h1>
                  <span>Order ID:</span> {order._id}
                </h1>
              </div>
            </div>
            <div className="order-admin-section ">
              <div className="col-1">
                {/* ORDER ITEMS */}
                <div className="card-body">
                  <h3>Ordered Items</h3>
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
                            {varPrice}.00 ={' '}
                            <span className="peso-sign">&#8369;</span>
                            {qty * varPrice}.00
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* SHIPPING INFO */}
                <div className="card-body">
                  <h3>Shipping</h3>
                  <p>
                    <strong>Name:</strong> {order.shippingAddress.fullName}
                  </p>
                  <p>
                    <strong>Phone Number:</strong>{' '}
                    {order.shippingAddress.phoneNumber}
                  </p>
                  <p>
                    <strong>Address:</strong> {order.shippingAddress.address},{' '}
                    {order.shippingAddress.city},{' '}
                    {order.shippingAddress.postalCode}
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
                {!order.isPaid && order.paymentMethod === 'Cash on delivery' && (
                  <div>
                    {loadingCodPay && (
                      <div className="form-loading">Loading...</div>
                    )}
                    {errorCodPay && (
                      <p className="form-error-alert-danger">{errorDeliver}</p>
                    )}
                    <button
                      className="form-submit-btn"
                      type="button"
                      onClick={CodPayHandler}
                    >
                      COD Paid
                    </button>
                  </div>
                )}
                {!order.isDelivered && (
                  <div>
                    {loadingDeliver && (
                      <div className="form-loading">Loading...</div>
                    )}
                    {errorDeliver && (
                      <p className="form-error-alert-danger">{errorDeliver}</p>
                    )}
                    <button
                      className="form-submit-btn"
                      type="button"
                      onClick={deliverHandler}
                    >
                      Order Delivered
                    </button>
                  </div>
                )}
                {order.isDelivered && order.isPaid && (
                  <div className="order-completed">COMPLETED</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default OrderAdmin;
