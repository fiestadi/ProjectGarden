import React from 'react';
import styles from './modal.module.css';

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}> 
      <div className={styles.modalHeader}>
          <p className={styles.title_modal}>Congratulations!</p>
          <button className={styles.closeButton} onClick={onClose}>X</button>
        </div>

<p className={styles.text_modal}>Your order has been successfully placed on the website. </p>   
<p className={styles.text_modal}>
A manager will contact you shortly to confirm your order.</p>   
      </div>
    </div>
  );
};

export default Modal;