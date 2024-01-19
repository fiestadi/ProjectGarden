import React,{useEffect,useState} from 'react';
import { useForm } from 'react-hook-form';
import styles from './discountForm.module.css';
import ImgDiscount from '../../../components/assets/discountForm.jpg';


const DiscountForm = () => {
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
  const [isSubmitted, setSubmitted] = useState(false);
  const [isButtonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('discountFormData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      Object.keys(parsedData).forEach((dataKey) => {
        setValue(dataKey, parsedData[dataKey]);
      });
      
    }
  }, [setValue]);

  const handleButtonClick = () => {
    setButtonClicked(prevState => !prevState);
   

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
      
        const responseData = await response.json();
        console.log('Response data:', responseData);

        resetFormAndLocalStorage(data);

      

      } else {
        console.error('Failed to submit discount form data to the server.');
      }

    } catch (error) {
      console.error('An error occurred during form submission:', error);
    } finally {
      setButtonClicked(false);
    }
  };

  const resetFormAndLocalStorage = (data) => {
    reset();
    setSubmitted(true);
    localStorage.setItem('discountFormData', JSON.stringify(data));

    // Reset form values
    Object.keys(data).forEach((dataKey) => {
      setValue(dataKey, data[dataKey]);
    });
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
              {...register('name', { required: 'Name is required' })}
              className={styles.inputField}
              placeholder='Name'
            />
            {errors.name && <span className={styles.error}>{errors.name.message}</span>}
          </label>

          <label className={styles.inputLabel}>
            <input
              type="tel"
              {...register('phoneNumber', {
                required: 'Phone Number is required',
                pattern: { value: /^[0-9]{10}$/, message: 'Invalid phone number' }
              })}
              className={styles.inputField}
              placeholder='Phone Number'
            />
            {errors.phoneNumber && <span className={styles.error}>{errors.phoneNumber.message}</span>}
          </label>


          <label className={styles.inputLabel}>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
              })}
              className={styles.inputField}
              placeholder='Email'
            />
            {errors.email && <span className={styles.error}>{errors.email.message}</span>}
          </label>

          <button type="submit" className={`${styles.button} ${isButtonClicked ? styles.clickedButton : ''}`}
           disabled={isSubmitted}
           onClick={(e) => {
            handleButtonClick();
            e.preventDefault(); 
          }}
        >
            <p className={styles.button_discount}> {isButtonClicked ? 'Request Submitted' : 'Get a Discount'}</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default DiscountForm;