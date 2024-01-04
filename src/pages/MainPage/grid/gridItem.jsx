import React from 'react';
import styles from './gridItem.module.css';
const PhotoGridItem= ({ imageUrl, caption }) => {
  return (
    <div className={styles.photo_grid_item}>
      <img className={styles.gridImg} src={imageUrl} alt={caption} />
      <p className={styles.caption}>{caption}</p>
    </div>
  );
};

export default PhotoGridItem;