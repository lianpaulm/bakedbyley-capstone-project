import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderAdmin.css';

import { MdRefresh } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';

const AdminHeader = () => {
  return (
    <div className="header-admin">
      <div className="header-container">
        <Link to="/admin/products" className="brand">
          BakedbyLey
        </Link>
        <button className="refresh-btn">
          <MdRefresh />
        </button>
        <button className="profile">
          <FaUserCircle />
        </button>
      </div>
    </div>
  );
};

export default AdminHeader;
