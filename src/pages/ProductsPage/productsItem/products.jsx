import React,{ useState} from 'react';
import { Link } from 'react-router-dom';
import { URL } from '../../../../src/components/URL/url';
import { useDispatch } from 'react-redux'; 
import styles from './productItem.module.css';
import ButtonCard from '../../../components/buttonCard/buttonCard';
import { addProductToCart } from '../../../store/slices/basketSlice';

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
    const link = `/product/${item.id}`;
    const calculatedPrice = item.discont_price
    ? item.price - (item.price * item.discont_price) / 100
    : null;
    const [isHovered, setIsHovered] = useState(false);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    if (!item) {
      return <div>No item data available</div>;
    }
    const addToCartHandler = () => {
      dispatch(addProductToCart(item));
      setIsAddedToCart(true);
    };
   
  
   
      return (
      <div className={styles.productItem}  onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
       
      <Link to={link} className={styles.productContainer}>
        { item.discont_price > 0 && (
          <div className={styles.discountOverlay}>
            <p className={styles.discont}>-{item.discont_price}%</p>
          </div>
        )}
        <img
          className={styles.productImage}
          src={URL + item.image}
          alt={item.title}
        />
      </Link>
      <div className={styles.buttonContainer} >
      {isHovered && (
        <ButtonCard 
  onClick={addToCartHandler}
          label={isAddedToCart ? 'Add to Cart' : 'Add to Cart'}
          isActive={isAddedToCart}
        />
      )}
      </div>
      <div className={styles.productInfo}>
      <div className={styles.productInfoLink}>
        <p className={styles.productInfo_title}>{item.title}</p>
        </div>
        <div className={styles.price_product}>
          {calculatedPrice !== null && (
            <>
              <p className={styles.productInfo_price_discounted}>
                ${calculatedPrice.toFixed(2)}
              </p>
              {item.price !== null && (
                <p className={styles.productInfo_price}>
                  ${item.price.toFixed(2)}
                </p>
              )}
            </>
          )}
          {calculatedPrice === null && item.price !== null && (
            <p className={styles.productInfo_price_no_discount}>
              ${item.price.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};


export default ProductItem;