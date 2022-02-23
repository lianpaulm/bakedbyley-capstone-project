import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { listOrderAdmin } from '../../../actions/orderAction';
import Loading from '../../../components/Loading/Loading';
import HeaderAdmin from '../Header/HeaderAdmin';
import SidebarAdmin from '../Sidebar/SidebarAdmin';
import './Order.css';

const Orders = () => {
  const orderAdminList = useSelector((state) => state.orderAdminList);
  const { loading, error, orders } = orderAdminList;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrderAdmin());
  }, [dispatch]);

  if (loading) {
    return (
      <>
        <HeaderAdmin />
        <main>
          <div className="dashboard-container">
            <SidebarAdmin />
            <Loading />
          </div>
        </main>
      </>
    );
  }
  if (error) {
    return (
      <>
        <HeaderAdmin />
        <main>
          <div className="dashboard-container">
            <SidebarAdmin />
            <p className="form-error-alert">{error}</p>
          </div>
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
              <h3>Orders</h3>
            </div>
            <div className="table-container">
              <div className="table-header">
                <div>ID</div>
                <div>Ordered Date</div>
                <div>Paid</div>
                <div>Delivered</div>
                <div>Status</div>
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
                      {/* <div>
                        <span className="peso-sign">&#8369;</span>
                        {totalPrice.toFixed(2)}
                      </div> */}
                      <div>{isPaid ? paidAt.substring(0, 10) : 'No'}</div>
                      <div>
                        {isDelivered ? deliveredAt.substring(0, 10) : 'No'}
                      </div>
                      <div>
                        {!isPaid || !isDelivered
                          ? 'Pending'
                          : isPaid && isDelivered
                          ? 'Completed'
                          : 'Pending'}
                      </div>
                      <div>
                        <button
                          className="table-action-btn"
                          type="button"
                          onClick={() => {
                            navigate(`/admin/orders/${id}`);
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
          </div>
        </div>
      </main>
    </>
  );
};

export default Orders;
