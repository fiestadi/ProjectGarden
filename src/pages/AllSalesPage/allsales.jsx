import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsWithDiscount } from '../../store/slices/singleProductSlice';
import ProductItem from '../ProductsPage/productsItem/products';
import styles from './allsels.module.css';
import Filter from '../../components/filter/filter';

const DiscountedProductsPage = () => {
  const dispatch = useDispatch();
  const productsWithDiscount = useSelector((state) => state.products.data);
  useEffect(() => {
    document.title = "All sales"
},[])
  useEffect(() => {
    dispatch(fetchProductsWithDiscount());
  }, [dispatch]);

  return (
    <div className={styles.discont_container}>
      <p className={styles.title}>Discounted items</p>
      <Filter />
      <div className={styles.productContainer}>
      <div className={styles.productContainer}>
      <div className={styles.productList}>
      {productsWithDiscount
          .filter((product) => product.discont_price > 0) 
          .map((product) => (
            <div key={product.id} className={styles.productItem}>
              <ProductItem item={product} />
          </div>
        ))}
         </div>
      </div>
    </div>
    </div>
  );
};

export default DiscountedProductsPage;
