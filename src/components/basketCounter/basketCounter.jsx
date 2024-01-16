import React from 'react';
import styles from './basketCounter.module.css'; 

const BasketCounter = ({ quantity }) => {
  return (
    <div className={styles.basketCounter}>
      {quantity > 0 && <span>{quantity}</span>}
    </div>
  );
};

export default BasketCounter;
