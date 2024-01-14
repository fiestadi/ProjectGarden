import React, { useEffect } from 'react';
import styles from './basket.module.css'
import BasketItem from './basketItem';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const BasketPage = () => {
   const { basket, products } = useSelector(state => state)

   const data = basket.data.map(el => {
      const product = products.data.find(({ id }) => id === el.id)
      return { ...el, ...product }
   })
   useEffect(() => {
      document.title = "Cart";
    }, []);
  
    return (
      <div className={styles.basket_page}>
        <h1>Shopping cart</h1>
        <div className={styles.container}>
          {
            basket.data.length ? (
              <div className={styles.basket_items}>
                <Link className={styles.link_to_shop} to="/products/all">
                  Back to the store &rsaquo;
                </Link>
                <div>
                  {data.map((el) => (
                    <BasketItem key={el.id} {...el} />
                  ))}
                </div>
              </div>
            ) : (
              <p>Your basket is empty.</p>
            )
          }
        </div>
      </div>
    );
  };
  
  export default BasketPage;