import React from 'react';
import styles from './call.module.css';
const CallButton = () => {
  const phoneNumber = '+49 999 999 99 99';
  

  return (
   <div className={styles.content_phone}>
   <p className={styles.text}>Phone</p>
    <a href={`tel:${phoneNumber}`} className={styles.callButton}>{phoneNumber}
      
    </a>
    </div>
  );
};

export default CallButton;