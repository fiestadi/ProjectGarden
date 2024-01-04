import React from 'react';
import { Link } from 'react-router-dom';
import styles from './main.module.css';
import headerImg from '../../components/assets/img.jpg';
import Footer from '../../components/Footer/footer';
import PhotoGrid from './grid/grid';
import DiscountForm from './discountForm/discountForm';


const MainPage = () => {
 
  return (
    <header>
      <div className={styles['home-container']}>

      {/* Header image */}
      <div className={styles['header-container']}>
        <img src={headerImg} alt="#" className={styles['header-image']} />
        <div className={styles['header-content']}>
          <h2>Amazing Discounts on Garden Products!</h2>
          <button className={styles['header-button']}>Check out</button>
        </div>
      </div>

      {/* image-gallery */}
      <div className={styles['gallery_container']}>
        <div className={styles['categories-container']}>
          <p className={styles.paragraph}>Categories</p>

          <div className={styles['line']}></div>
        </div>

        {/* Categories button */}
        <Link to="/categories" className={styles.all_categories_button}>
            All Categories
          </Link>
          </div>
         
      <div className="slider">
  <PhotoGrid />
  </div>
  <div className={styles.background_container}>
    <p className={styles.discount_text}>5% off on the first order
</p>
    <DiscountForm />
  </div>
  <Footer />
  </div>
</header> 
  );
  };

export default MainPage;
