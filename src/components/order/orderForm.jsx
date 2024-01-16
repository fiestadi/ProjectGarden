import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './orderForm.module.css'

const OrderForm = () => {
   const { register, handleSubmit, formState: { errors } } = useForm();
   const onSubmit = async (data) => {
      try {
        
        const response = await fetch('http://localhost:3333/order/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
      
        const responseData = await response.json();
  
       
        console.log('Form submitted successfully', responseData);
      } catch (error) {
       
        console.error('Error submitting form', error);
      }
    };
 

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.label}>
       Name
        <input    className={styles.input}
          {...register('name', { required: 'Name is required' })}
        />
      </label >
     
      <br />
      <label className={styles.label}>
      Phone number
        <input    className={styles.input}
          {...register('phoneNumber', { required: 'Phone number is required' })}
        />
      </label>
      <br />
      <label className={styles.label}>
      Email
        <input    className={styles.input} 
          {...register('email', { required: 'E-mail is required' })}
        />
      </label>
      <br />
      <button type="submit" className={styles.button}>Order
</button>
      {errors && (
        <ul className={styles.errorList}>
          {Object.keys(errors).map((key) => (
            <li key={key} className={styles.errorItem}>{errors[key].message}</li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default OrderForm;
