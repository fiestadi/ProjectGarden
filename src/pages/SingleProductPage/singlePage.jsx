import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './singlePage.module.css';
import { useParams } from 'react-router-dom';
import { fetchSingleProduct } from '../../store/slices/singleProductSlice';
import { URL } from '../../components/URL/url';
import Footer from '../../components/Footer/footer';


const SingleProductPage = () => {
   const { id } = useParams()
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchSingleProduct(id))
   }, [dispatch, id])

   const { product } = useSelector(state => state)

   const { title, description, discont_price, price, image } = product?.item ? product?.item : {}
   const discount = (100 - (discont_price * 100 / price)).toFixed(1)

   useEffect(() => {
      document.title = `Product: ${title}`
   }, [title])
// dostup k zagolovku 

   return (
          <>
              <div className={styles.singleProduct}>
                <h1 className={styles.productTitle}>{title}</h1>
                <div className={styles.container}>
                  <div>
                    <img className={styles.productImage} src={URL + image} alt={title} />
                  </div>
                  <div className={styles.productInfo}>

                    <div className={styles.button}>
                      <button>Add to cart</button>
                    </div>
                    <div>
                      <p>Description</p>
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
              </div>
          
            <Footer />
          </>
        );
      };
      
      export default SingleProductPage;