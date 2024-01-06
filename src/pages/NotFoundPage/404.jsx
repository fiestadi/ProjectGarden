import React from 'react';
import notFoundImage from '../../components/assets/4.png';
import notFoundImage1 from '../../components/assets/not404.png';
import notFoundImage2 from '../../components/assets/4.png';
import styles from './notfaund.module.css';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/footer';
const images = [
   { id: 1, src: notFoundImage, alt: 'Image1' },
   { id: 2, src: notFoundImage1, alt: 'Image2' },
   { id: 3, src: notFoundImage2, alt: 'Image3' },
 ];
const NotFoundPage = () => {
    return (
      <div className={styles.page}>
         <div className={styles.imageRow}>
      {images.map(image => (
        <img key={image.id} className={styles.img} src={image.src} alt={image.alt} />
      ))}
      </div>
      <h1 className={styles.title_text}>Page Not Found
</h1>
      <p className={styles.text}>We’re sorry, the page you requested could not be found. Please go back to the homepage.</p>
      <Link to="/" className={styles.home_btn}>GO Home</Link>
      <Footer />
    </div>
    );
};

export default NotFoundPage;