import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './singlePage.module.css';
import { useParams } from 'react-router-dom';
import { fetchSingleProduct } from '../../store/slices/singleProductSlice';
import { URL } from '../../components/URL/url';


const SingleProductPage = () => {
   const { id } = useParams()
   const dispatch = useDispatch()
   const [quantity, setQuantity] = useState(0);
   useEffect(() => {
      dispatch(fetchSingleProduct(id))
   }, [dispatch, id])

   const product = useSelector((state) => state.product); 

   const { title, description, discont_price, price, image } = product.item && product.item.length > 0 ? product.item[0] : {};
   const discountedPrice = price - (price * discont_price / 100).toFixed(1);
// logika na max i min tovara
const increaseQuantity = () => {
   setQuantity((prevQuantity) => prevQuantity + 1);
 };

 const decreaseQuantity = () => {
   setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
 };
   useEffect(() => {
      document.title = `Product: ${title}`
   }, [title])
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
                 <p className={styles.productInfo_price}>${price}</p>
                <p className={styles.productInfo_price_discounted}>{discountedPrice}</p> 
              </div> 
              <div className={styles.buttonContainer}>
            <button className={styles.button_quantity} onClick={decreaseQuantity}>-</button>
            <span className={styles.quantity}>{quantity}</span>
            <button className={styles.button_quantity} onClick={increaseQuantity}>+</button>
                      <button className={styles.addCart}>Add to cart</button>
                    </div>
                   <div>
                      <p className={styles.discription_title}>Description</p>
                      <p className={styles.discription_text}>{description}</p>
                    </div>
                  </div>
                </div>
          </>
        );
      };
      
      export default SingleProductPage;
