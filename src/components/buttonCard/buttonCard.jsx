import React from 'react';
import styles from './buttonCard.module.css';
const ButtonCard = ({ onClick, label, isActive }) => {

  return (
    <div className={styles.buttonContainer} >
      <button className={isActive ? styles.active : styles.button} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default ButtonCard;