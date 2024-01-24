import React from 'react'
import styles from './basketEmpty.module.css';
import { useNavigate } from 'react-router-dom';

function BasketEmpty() {
  const navigate = useNavigate();
  const handleContinueShopping = () => {
    navigate('/allproducts');
  };
  return (
    <div className={styles.basketEmpty}>
      <p className={styles.basketEmtyText}>Looks like you have no items in your basket currently.</p>
      <button className={styles.shopping} onClick={handleContinueShopping}>Continue Shopping</button>
    </div>
  )
}
export default BasketEmpty;