import React from 'react';
import { Link } from 'react-router-dom';
import { URL } from '../../../components/URL/url';
import styles from './productItem.module.css';
const ProductItem = ({ item }) => {
    const link = `/product/all`;
    const discountedPrice = item.discont_price
    ? item.price - (item.price * item.discont_price) / 100
    : null;

    
    return (

        <Link to={link} className={styles.productItem}>
            <div className={styles.productContainer}>
                {item.discont_price > 0 && (
                    <div className={styles.discountOverlay}>
                        <p className={styles.discont}>-{item.discont_price}%</p>
                    </div>
                )}
                <img className={styles.productImage} src={URL + item.image} alt={item.title} />
                <div className={styles.productInfo}>
                    <p className={styles.productInfo_title} >{item.title}</p>
                    <div className={styles.price_product}>
                    <p className={styles.productInfo_price}> ${item.price.toFixed(2)}</p>
                  
                       
                    {discountedPrice && (
              <p className={styles.productInfo_price_discounted}>
                ${discountedPrice.toFixed(2)}
              </p>
            )}
          </div>
                    </div>
              
            </div>
        </Link>
    );
};
export default ProductItem;