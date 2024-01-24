import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsWithDiscount } from '../../store/slices/singleProductSlice';
import ProductItem from '../ProductsPage/productsItem/products';
import styles from './allsels.module.css';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';


const DiscountedProductsPage = () => {
  const dispatch = useDispatch();
  const productsWithDiscount = useSelector((state) => state.products.data);
  useEffect(() => {
    document.title = "All Sales"
  }, [])
  useEffect(() => {
    dispatch(fetchProductsWithDiscount());
  }, [dispatch]);
  const breadcrumbsData = [
    { path: '/', label: 'Main Page' },
    { path: '/allsales', label: 'All Salles' },

  ];

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsData} />
      <div className={styles.discont_container}>
        <p className={styles.title}>Discounted items</p>
        <div className={styles.container}>
          <div className={styles.productContainer}>
            <div className={styles.productList}>
              {productsWithDiscount
                .filter((product) => product.discont_price > 0)
                .map((product) => (
                  <div key={product.id} className={styles.productItem}>
                    <div>
                      <ProductItem item={product} />
                    </div>
      
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountedProductsPage;
