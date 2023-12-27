import React from 'react'
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
   return (
     <nav className={styles.navbar}>
       <ul className={styles['nav_list']}>
         <li className={styles['nav-item']}>
           <Link to="/" className={styles['nav-link']}>Main Page</Link>
         </li>
         <li className={styles['nav-item']}>
           <Link to="/Categories" className={styles['nav-link']}>Categories</Link>
         </li>
         <li className={styles['nav-item']}>
           <Link to="/AllProducts" className={styles['nav-link']}>All products</Link>
         </li>
       </ul>
     </nav>
   );
 };
 export default Navbar;
 
