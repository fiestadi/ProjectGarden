import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './button.module.css';
const ButtonLink = () => {
  return (
    <div className={styles.navigation}>
    <NavLink to="/" exact={true.toString()}>
      <button className={styles.navButton}>
        Main page
      </button>
    </NavLink>
    <NavLink to="/categories">
      <button className={
        `${styles.navButton} ${styles.mainButton}`}>
        Categories
      </button>
    </NavLink>
  </div>
);
};

export default ButtonLink;