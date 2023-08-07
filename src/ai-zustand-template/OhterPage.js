import React from 'react';

const OtherPage = ({ totalPrice, totalQuantity }) => {
  return (
    <div>
      <h1>Other Page</h1>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Quantity: {totalQuantity}</p>
    </div>
  );
};

export default OtherPage;
