
import React from 'react';
import styles from './main.module.css';

import Gallery from '../../components/Gallery/galery';
import headerImg from '../../components/assets/img.jpg';

const MainPage = () => {
  return (
    <header className={styles['home-container']}>

      {/* Header image */}
      <div className={styles['header-container']}>
        <img src={headerImg} alt="#" className={styles['header-image']} />
        <div className={styles['header-content']}>
          <h2>Amazing Discounts on Garden Products!</h2>
          <button className={styles['header-button']}>Check out</button>
        </div>
      </div>

      {/* image-gallery */}
      <div className={styles['gallery-container']}>
    <p>Categories</p>
    </div>
    </header>
   
  );
};

export default MainPage;
