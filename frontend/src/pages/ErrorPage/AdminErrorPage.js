import React from 'react';
import { Link } from 'react-router-dom';

const AdminErrorPage = () => {
  return (
    <div
      style={{
        display: 'grid',
        placeContent: 'center',
        height: '100vh',
        textAlign: 'center',
        gap: '1rem',
      }}
    >
      <h2>Page not found</h2>
      <Link
        to="/admin/products"
        style={{
          textDecoration: 'underline',
          paddingBottom: '2px',
        }}
      >
        Go back to the admin page
      </Link>
    </div>
  );
};

export default AdminErrorPage;
