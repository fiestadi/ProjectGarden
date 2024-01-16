import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './singlePage.module.css';
import { useParams } from 'react-router-dom';
import {addProductToCart} from '../../store/slices/basketSlice';
import { fetchSingleProduct } from '../../store/slices/singleProductSlice';
import { URL } from '../../components/URL/url';



const SingleProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false); 

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [id, dispatch]);

  const handleAddToCart = () => {
    const { title, image, price, discont_price} = product.item && product.item.length > 0 ? product.item[0] : {};

    dispatch(addProductToCart({ id, image, title, price, discont_price }));
    setAddedToCart(true); 
  };

  const product = useSelector((state) => state.product);
  const { title, description, discont_price, price, image } = product.item && product.item.length > 0 ? product.item[0] : {};
 
  const discountedPrice = discont_price > 0
    ? (price - (price * discont_price / 100)).toFixed(2)
    : null;
    
  const increQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
  };

  useEffect(() => {
    document.title = `Product: ${title}`;
  }, [title]);
  useEffect(() => {
    
    if (addedToCart) {
      setAddedToCart(false);
      setQuantity(0); 
    }
  }, [addedToCart]);

// dostup k zagolovku 

   return (
          <>
              <div className={styles.productContainer}>
                <div className={styles.productInfo}>
                  <div className={styles.photoContainer}>
                <img className={styles.productImage_small} src={URL + image} alt={title} />
                <img className={styles.productImage_small} src={URL + image} alt={title} />
                <img className={styles.productImage_small} src={URL + image} alt={title} />
             
                 <img className={styles.productImage} src={URL + image} alt={title} />
                 </div>
                 </div>
                  <div className={styles.price_product}>
                  <p className={styles.productTitle}>{title}</p>
                 <div className={styles.info_dicount}>
                 {discont_price > 0 && (
              <div className={styles.discountOverlay}>
                <p className={styles.discount}>-{discont_price}%</p>
              </div>
            )}
            {discountedPrice !== null && (
              <>
                <p className={styles.productInfo_price_discounted}>
                  ${discountedPrice}
                </p>
                {price !== null && (
                  <p className={styles.productInfo_price}> ${price}</p>
                )}
              </>
            )}
            {discountedPrice === null && price !== null && (
              <p className={styles.productInfo_price_no_discount}>
                ${price}
              </p>
            )}
          </div>
              <div className={styles.buttonContainer}>
            <button className={styles.button_quantity} onClick={decreQuantity}>-</button>
            <span className={styles.quantity}>{quantity}</span>
            <button className={styles.button_quantity} onClick={increQuantity}>+</button>
            <button  type='To cart' className={styles.addCart}onClick={handleAddToCart}>Add to cart </button>
                    </div>
                   <div>
                      <p className={styles.discription_title}>Description</p>
                      </div>
                      <div>
                      <p className={styles.discription_text}>{description}</p>
                    </div>
                  </div>
                </div>
          </>
        );
      };
      
      export default SingleProductPage;
