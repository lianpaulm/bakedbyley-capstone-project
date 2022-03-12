import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listUser } from '../../../actions/userActions';
import Loading from '../../../components/Loading/Loading';
import HeaderAdmin from '../Header/HeaderAdmin';
import SidebarAdmin from '../Sidebar/SidebarAdmin';
import './Users.css';

const Users = () => {
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUser());
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
          <div className="users-admin-container">
            <div className="products-admin-header">
              <h3>Users</h3>
            </div>
            <div className="table-container">
              <div className="table-header">
                <div>ID</div>
                <div>Name</div>
                <div>Email</div>
                <div>Role</div>
                {/* <div>Action</div> */}
              </div>
              <div className="table-body">
                {users
                  .map((user) => {
                    const { _id: id, name, email, role } = user;
                    return (
                      <div key={id} className="table-row">
                        <div>{id}</div>
                        <div>{name}</div>
                        <div>{email}</div>
                        <div>
                          <div className="user-role">{role}</div>
                        </div>
                        {/* <div>Edit</div> */}
                      </div>
                    );
                  })
                  .reverse()}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Users;
