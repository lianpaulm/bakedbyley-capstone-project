import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading/Loading';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { useEffect } from 'react';
import { listOrderMine } from '../../actions/orderAction';
import './OrderHistory.css';

const OrderHistory = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderMineList = useSelector((state) => state.orderMineList);
  const { loading, error, orders } = orderMineList;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
    dispatch(listOrderMine());
  }, [dispatch, navigate, userInfo]);

  return (
    <>
      <Header />
      <div className="order-history-cont container ">
        <h1>Order History</h1>
        {loading ? (
          <Loading />
        ) : error ? (
          <p className="form-error-alert">{error}</p>
        ) : (
          <div className="table-container">
            <div className="table-header">
              <div>ID</div>
              <div>Ordered Date</div>
              <div className="is-paid">Paid</div>
              <div className="is-delivered">Delivered</div>
              <div>Status</div>
              <div>Action</div>
            </div>
            <div className="table-body">
              {orders
                .map((order) => {
                  const {
                    _id: id,
                    createdAt,
                    isPaid,
                    paidAt,
                    isDelivered,
                    deliveredAt,
                  } = order;
                  return (
                    <div key={id} className="table-row">
                      <div>
                        <span className="order-row-span">Order ID: </span>
                        {id}
                      </div>
                      <div>
                        <span className="order-row-span">Ordered Date: </span>
                        {createdAt.substring(0, 10)}
                      </div>
                      {/* <div>
                      <span className="peso-sign">&#8369;</span>
                      {totalPrice.toFixed(2)}
                    </div> */}
                      <div className="is-paid">
                        {isPaid ? paidAt.substring(0, 10) : 'No'}
                      </div>
                      <div className="is-delivered">
                        {isDelivered ? deliveredAt.substring(0, 10) : 'No'}
                      </div>
                      <div>
                        <div
                          className={`${
                            !isPaid || !isDelivered
                              ? 'order-status pending'
                              : isPaid && isDelivered
                              ? 'order-status completed'
                              : 'order-status pending'
                          }`}
                        >
                          {/* {!isPaid
                        ? 'To Pay'
                        : !isDelivered
                        ? 'To Receive'
                        : isPaid && isDelivered
                        ? 'Completed'
                        : 'Pending'} */}
                          {!isPaid || !isDelivered
                            ? 'Pending'
                            : isPaid && isDelivered
                            ? 'Completed'
                            : 'Pending'}
                        </div>
                      </div>
                      <div>
                        <button
                          className="table-action-btn"
                          type="button"
                          onClick={() => {
                            navigate(`/order/${id}`);
                          }}
                        >
                          <span className="order-row-span">Order </span>
                          Details
                        </button>
                      </div>
                    </div>
                  );
                })
                .reverse()}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OrderHistory;
