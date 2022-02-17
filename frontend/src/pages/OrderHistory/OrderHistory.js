import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading/Loading';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { useEffect } from 'react';
import { listOrderMine } from '../../actions/orderAction';

const OrderHistory = () => {
  const orderMineList = useSelector((state) => state.orderMineList);
  const { loading, error, orders } = orderMineList;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrderMine());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="order-history-cont container">
        <h1>Order History</h1>
        {loading ? (
          <Loading />
        ) : error ? (
          <p className="form-error-alert">{error}</p>
        ) : (
          <div className="table-container">
            <div className="table-header">
              <div>ID</div>
              <div>Date</div>
              <div>Total</div>
              <div>Paid</div>
              <div>Delivered</div>
              <div>Action</div>
            </div>
            <div className="table-body">
              {orders.map((order) => {
                const {
                  _id: id,
                  createdAt,
                  totalPrice,
                  isPaid,
                  paidAt,
                  isDelivered,
                  deliveredAt,
                } = order;
                return (
                  <div key={id} className="table-row">
                    <div>{id}</div>
                    <div>{createdAt.substring(0, 10)}</div>
                    <div>{totalPrice}</div>
                    <div>{isPaid ? paidAt.substring(0, 10) : 'No'}</div>
                    <div>
                      {isDelivered ? deliveredAt.substring(0, 10) : 'No'}
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          navigate(`/order/${id}`);
                        }}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OrderHistory;
