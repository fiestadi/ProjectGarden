import React from 'react';
import PhotoGridItem from './gridItem';
import image1 from '../../../components/assets/slider1.png';
import image2 from '../../../components/assets/slider2.png';
import image3 from '../../../components/assets/slider3.png';
import image4 from '../../../components/assets/slider4.png';
import styles from './grid.module.css';
const PhotoGrid = () => {
   return (
      <div className={styles.photo_grid}>
        <PhotoGridItem imageUrl={image1} caption="Fertilizer
" />
        <PhotoGridItem imageUrl={image2} caption="Protective products and septic tanks" />
        <PhotoGridItem imageUrl={image3} caption="Planting material" />
        <PhotoGridItem imageUrl={image4} caption="Tools and equipment" />
      </div>
    );
  };
  
  export default PhotoGrid;
     