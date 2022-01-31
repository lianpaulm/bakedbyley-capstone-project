import React from 'react';
import HeaderAdmin from '../Header/HeaderAdmin';
import SidebarAdmin from '../Sidebar/SidebarAdmin';

const Users = () => {
  return (
    <>
      <HeaderAdmin />
      <main>
        <div className="dashboard-container">
          <SidebarAdmin />
          <div className="new-product-container">
            <h2>Users</h2>
          </div>
        </div>
      </main>
    </>
  );
};

export default Users;
