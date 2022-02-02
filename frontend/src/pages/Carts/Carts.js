import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Carts = () => {
  const { id: productID } = useParams();
  const location = useLocation();
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;
  console.log(qty);

  return (
    <div>
      <h1>Cart page</h1>
      <p>Product ID: {productID}</p>
      <p>{qty}</p>
    </div>
  );
};

export default Carts;
