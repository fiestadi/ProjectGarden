import React, { useState } from 'react';
import styles from './discountForm.module.css';
import ImgDiscount from '../../../components/assets/discountForm.jpg';

const DiscountForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGetDiscount = () => {
    console.log('Name:', name);
    console.log('Phone Number:', phoneNumber);
    console.log('Email:', email);

  };

  return (
    <div className={styles.discountFormContainer}>
      <div className={styles.imageContainer}>
        <img src={ImgDiscount} alt="Discount" className={styles.discountImage} />
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>
          <input type="text" value={name} onChange={handleNameChange} className={styles.inputField} placeholder='Name' />
        </label>

        <label className={styles.inputLabel}>
          <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} className={styles.inputField} placeholder='Phone Number' />
        </label>

        <label className={styles.inputLabel}>
          <input type="email" value={email} onChange={handleEmailChange} className={styles.inputField} placeholder='Email' />
        </label>

        <button onClick={handleGetDiscount} className={styles.button}><p className={styles.button_discount}>
          Get a Discount</p>
        </button>
      </div>
    </div>
  );
};

export default DiscountForm;