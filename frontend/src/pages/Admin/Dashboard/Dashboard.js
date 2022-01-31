import React from 'react';
import HeaderAdmin from '../Header/HeaderAdmin';
import SidebarAdmin from '../Sidebar/SidebarAdmin';
import '../LayoutAdmin.css';

const DashboardAdmin = () => {
  return (
    <>
      <HeaderAdmin />
      <main>
        <div className="dashboard-container">
          <SidebarAdmin />
          <h2>Dashboard</h2>
        </div>
      </main>
    </>
  );
};

export default DashboardAdmin;
