import React from 'react'
import styles from './navbar.module.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import busket from '../assets/basket_empty.png';
import BasketCounter from '../basketCounter/basketCounter';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const location = useLocation(); // hook dlia videlenia aktivnoj stranici
  const cartQuantity = useSelector((state) => state.basket.totalAmount);
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt='#' />
        </div>
        <ul className={styles['nav_list']}>
          <li className={styles['nav-item']}>
            <Link to="/" className={`${styles['nav-link']} ${location.pathname === '/' ? styles.active : ''}`}>Main Page</Link>
          </li>
          <li className={styles['nav-item']}>
            <Link to="/categories" className={`${styles['nav-link']} ${location.pathname === '/categories' ? styles.active : ''}`}>
              Categories
            </Link>
          </li>
          <li className={styles['nav-item']}>
            <Link to="/allproducts" className={`${styles['nav-link']} ${location.pathname === '/allproducts' ? styles.active : ''}`}>
              All products
            </Link>
          </li>
          <li className={styles['nav-item']}>
            <Link to="/allsales" className={`${styles['nav-link']} ${location.pathname === '/allsales' ? styles.active : ''}`}>
              All sales
            </Link>
          </li>
        </ul>
        <div className={styles.busket}>
          <Link to="/basket">
            <img src={busket} alt="basket" />
          </Link>
          <div className={`${styles.basket_counter}${cartQuantity > 0 ? '' : styles['no-quantity']}`}>
            <BasketCounter quantity={cartQuantity} />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

