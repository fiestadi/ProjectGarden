import React from 'react';
import styles from './modal.module.css';

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
       
<h4 className={styles.title_modal}>Congratulations!</h4>
<p className={styles.text_modal}>Your order has been successfully placed on the website. A manager will contact you shortly to confirm your order.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;