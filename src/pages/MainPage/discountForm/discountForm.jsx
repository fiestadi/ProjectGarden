import React,{useEffect,useState} from 'react';
import { useForm } from 'react-hook-form';
import styles from './discountForm.module.css';
import ImgDiscount from '../../../components/assets/discountForm.jpg';


const DiscountForm = () => {
  const { register, handleSubmit, setValue,reset } = useForm();
  const [isSubmitted, setSubmitted] = useState(false);
  const [isButtonClicked, setButtonClicked] = useState(false);


  useEffect(() => {
    const storedData = localStorage.getItem('discountFormData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      Object.keys(parsedData).forEach((dataKey) => {
        setValue(dataKey, parsedData[dataKey]);
        console.log('Inside useEffect', dataKey, parsedData[dataKey]);
      });
    }
  }, [setValue]);
  
 const handleButtonClick = () => {
  setButtonClicked(true);
};

const onSubmit = async (data) => {
  try {
    const response = await fetch('http://localhost:3333/sale/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      setSubmitted(true);
      setButtonClicked(false);
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const responseData = await response.json();
       
    } else {
      console.error('Server response is not in JSON format.');
    }
      reset();

    
      Object.keys(data).forEach((dataKey) => {
        setValue(dataKey, data[dataKey]);
      });

      setSubmitted(true);
      setButtonClicked(false);
      localStorage.setItem('discountFormData', JSON.stringify(data));
    } else {
      console.error('Failed to submit discount form data to the server.');
    }
  } catch (error) {
    console.error('An error occurred during form submission:', error);
  }
};


  return (
    <div className={styles.discountFormContainer}>
      <div className={styles.imageContainer}>
        <img src={ImgDiscount} alt="Discount" className={styles.discountImage} />
      </div>
      <div className={styles.inputContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.inputLabel}>
            <input
              type="text"
              {...register('name',{ required: true })}
              className={styles.inputField}
              placeholder='Name'
            />
            
          </label>

          <label className={styles.inputLabel}>
            <input
              type="tel"
              {...register('phoneNumber',{
               required: true,
               pattern: /^[0-9]{10}$/})}
              className={styles.inputField}
              placeholder='Phone Number'
            />
          </label>

          <label className={styles.inputLabel}>
            <input
              type="email"
              {...register('email',{
               required: true,
               pattern: /^\S+@\S+$/i })}
              className={styles.inputField}
              placeholder='Email'
            />
          </label>

          <button type="submit" className={`${styles.button} ${isButtonClicked ? styles.clickedButton : ''}`}
           disabled={isSubmitted}
            onClick={handleButtonClick}>
            <p className={styles.button_discount}> {isButtonClicked ? 'Request Submitted' : 'Get a Discount'}</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default DiscountForm;