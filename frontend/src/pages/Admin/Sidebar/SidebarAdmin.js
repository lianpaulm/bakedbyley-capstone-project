import React from 'react';
import './SidebarAdmin.css';
import { FiUsers } from 'react-icons/fi';
import { CgClipboard } from 'react-icons/cg';
import { RiCake2Line, RiDashboardLine } from 'react-icons/ri';

import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

import { useNavigate, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="sidebar-admin">
      <Navigation
        // you can use your own router's api to get pathname
        activeItemId={location.pathname}
        onSelect={({ itemId }) => {
          navigate(itemId);
        }}
        items={[
          {
            title: 'Dashboard',
            itemId: '/admin/dashboard',
            elemBefore: () => <RiDashboardLine />,
          },
          {
            title: 'Products',
            itemId: '/admin/products',
            elemBefore: () => <RiCake2Line />,
            // subNav: [
            //   {
            //     title: 'All Products',
            //     itemId: '/admin/dashboard/products/all-products',
            //   },
            //   {
            //     title: 'Create Product',
            //     itemId: '/admin/dashboard/products/new-product',
            //   },
            // ],
          },
          {
            title: 'Orders',
            itemId: '/admin/orders',
            elemBefore: () => <CgClipboard />,
          },
          {
            title: 'Users',
            itemId: '/admin/users',
            elemBefore: () => <FiUsers />,
          },
        ]}
      />
    </div>
  );
};

export default AdminSidebar;
