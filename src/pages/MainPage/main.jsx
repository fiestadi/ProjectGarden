import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './main.module.css';
import headerImg from '../../components/assets/img.jpg';
import DiscountForm from './discountForm/discountForm';
import GalleryItem from '../CategoriesPage/Gallery/galery';
import ProductItem from '../ProductsPage/productsItem/products';

import { fetchCategories } from '../../store/slices/categoriesSlice';






const MainPage = () => {
  const dispatch = useDispatch();
  const { list } = useSelector(state => state.categories);
  const categoriesRef = useRef(null);
  const { product } = useSelector(state => state.products); 
  useEffect(() => {
    document.title = "Main Page"
  }, []);
  useEffect(() => {
    dispatch(fetchCategories());

  }, [dispatch]);
  const handleButtonClick = () => {
    // Scroll 
    categoriesRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <main>
      <div className={styles['home-container']}>

        {/* Header image */}
        <div className={styles['header-container']}>
          <img src={headerImg} alt="#" className={styles['header-image']} />
          <div className={styles['header-content']}>
            <h2>Amazing Discounts on Garden Products!</h2>
            <button className={styles['header-button']} onClick={handleButtonClick} >
              Check out
            </button>

          </div>
        </div>

        {/* image-gallery */}
        <div className={styles['gallery_container']}>
          <div className={styles['categories-container']} ref={categoriesRef}>
            <p id="categories" className={styles.paragraph}>Categories</p>

            <span className={styles.line}></span>


            {/* Categories button */}
            <Link to="/categories" className={styles.all_categories_button}>
              All Categories
            </Link>
          </div>
        </div>
        <div className={styles.categories}>
          {
            list.map(el => <GalleryItem key={el.id} {...el} />)
          }
        </div>
        <div className={styles.background_container}>
          <p className={styles.discount_text}>5% off on the first order
          </p>
          <DiscountForm />
        </div>

        {/* sale category */}
        <div className={styles.content_sales}>
          <p className={styles.saleTitle}>Sale</p>
          <span className={styles.line_sale}></span>
          <Link to="/allsales" className={styles.all_sales_button}>

            All sales
          </Link>
        </div>
        {/* <div className={styles.products_on_sale}>
        {product && (
    <Link to={`/products/${product.id}`}>
      <ProductItem item={product} />
    </Link>
  )}
        </div> */}
        </div>
    </main>
    );
};

export default MainPage;
