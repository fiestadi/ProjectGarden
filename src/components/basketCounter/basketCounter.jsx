import React from 'react';


const BasketCounter = ({ quantity }) => {
  return (
    <div >
      {quantity > 0 && <span>{quantity}</span>}
    </div>
  );
};

export default BasketCounter;
