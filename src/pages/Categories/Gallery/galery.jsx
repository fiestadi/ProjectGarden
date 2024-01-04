import React,{useState} from 'react';
import styles from './galery.module.css'

const GalleryItem = ({ url, text }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      className={`${styles['gallery-item']} ${isHovered ? styles['hovered'] : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={url} alt={text} />
      <div className={styles.overlay} />
      <p>{text}</p>
    </div>
  );
};

const Gallery = ({ assets }) => (
  <div className={styles['gallery-container']}>
    {assets.map((item, index) => (
      <GalleryItem key={index} {...item} />
    ))}
  </div>
);
export default Gallery;