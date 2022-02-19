import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './HeaderAdmin.css';

import { FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { MdArrowDropDown } from 'react-icons/md';
import { logout } from '../../../actions/userActions';

const AdminHeader = () => {
  // login
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // const navigate = useNavigate();
  // const goToCartHandler = () => {
  //   navigate('/cart', { replace: true });
  // };

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="header-admin">
      <div className="header-container">
        <Link to="/admin/products" className="brand">
          BakedbyLey
        </Link>

        {/* <button className="profile">
          <FaUserCircle />
        </button> */}

        {userInfo && userInfo.role === 'admin' ? (
          <div className="dropdown">
            <NavLink to="#">
              {/* <FaUserCircle className="avatar-svg" /> */}

              {userInfo.name}
              <MdArrowDropDown className="dropdown-icon" />
            </NavLink>
            <ul className="dropdown-content">
              <li>
                <NavLink to="#logout" onClick={logoutHandler}>
                  Log Out
                </NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink to="/login" className="profile">
            <FaUserCircle className="avatar-svg" />
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default AdminHeader;
