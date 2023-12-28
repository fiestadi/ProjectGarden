import React from 'react'
import styles from './navbar.module.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import busket from '../assets/basket_empty.png';
const Navbar = () => {
  const location = useLocation(); // hook dlia videlenia aktivnoj stranici
   return (
     <nav className={styles.navbar}>
      <div className={styles.container}>
       <div className={styles.logo}>
        <img src = {logo} alt='#' />
      </div>
       <ul className={styles['nav_list']}>
         <li className={styles['nav-item']}>
           <Link to="/" className= {`${styles['nav-link']} ${location.pathname === '/' ? styles.active :''}`}>Main Page</Link>
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
            All Sales
          </Link>
         </li>
       </ul>
       <div className={styles.busket}>
        <img src={busket} alt="basket" />
      </div>
      </div>
     </nav>
   );
 };
 export default Navbar;
 
