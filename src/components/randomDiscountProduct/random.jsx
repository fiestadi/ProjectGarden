import React from 'react';
import ProductItem from '../../pages/ProductsPage/productsItem/products';
import styles from './random.module.css';


const RandomDiscountedProducts = ({ products }) => {
   const discountedProducts = products.filter((el) => el.discont_price > 0);
 

   const limitedDiscountedProducts = discountedProducts.length >= 4
     ? getRandomItems(discountedProducts, 4)
     : discountedProducts;
 

   function getRandomItems(array, count) {
     const shuffledArray = array.sort(() => Math.random() - 0.5);
     return shuffledArray.slice(0, count);
   }
 
   return (
     <div className={styles.conteinerProducts}>
       {limitedDiscountedProducts.map((el) => (
         <ProductItem key={el.id} item={el} className={styles.productItem} />
       ))}
     </div>
   );
 };
 
 export default RandomDiscountedProducts;
 
    