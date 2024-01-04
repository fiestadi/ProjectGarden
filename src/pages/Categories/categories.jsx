import React, { useState, useEffect } from 'react';
import Gallery from './Gallery/galery';
import Foto1 from '../../components/assets/slider1.png';
import Foto2 from '../../components/assets/slider2.png';
import Foto3 from '../../components/assets/slider3.png';
import Foto4 from '../../components/assets/slider4.png';
import Foto5 from '../../components/assets/slider5.png';
import Foto6 from '../../components/assets/slider6.png';
import Foto7 from '../../components/assets/slider7.png';
import Foto8 from '../../components/assets/slider8.png';
import styles from './categories.module.css';
import ButtonLink from '../../components/ButtonNavigation/button';
import Footer from '../../components/Footer/footer';
const Categories = () => {
 
  const [assets1, setAssets1] = useState([]);
  const [assets2, setAssets2] = useState([]);

  useEffect(() => {
    const fetchData1 = async () => {
      const data = [
        { url: Foto1, text: 'Fertilizer',  },
        { url: Foto2, text: 'Protective products and septic tanks' },
        { url: Foto3, text: 'Planting material' },
        { url: Foto4, text: 'Tools and equipment', categorie:'Equipment' },
      ];

      setAssets1(data);
     
    };

    const fetchData2 = async () => {
      const data = [
        { url: Foto5, text: 'For indoor plants' },
        { url: Foto6, text: 'Pots and planters' },
        { url: Foto7, text: 'For indoor plants'},
        { url: Foto8, text: 'Garden figures' },
      ];

      setAssets2(data);
    };

    fetchData1();
    fetchData2();
  }, []);
    return (
      <div className={styles.container}>
        {/* Navigation Links */}
        
      <ButtonLink />

        <div>
          <p className={styles.heading}>Categories</p>
          <div className={styles.galleryContainer}>
            <Gallery assets={assets1} />
          </div>
        </div>
        <div>
          <div className={styles.galleryContainer}>
            <Gallery assets={assets2} />
          </div>
        </div>
        <Footer />
      </div>
  );
};

export default Categories;