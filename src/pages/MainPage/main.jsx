import React,{useEffect} from 'react';
import { Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './main.module.css';
import headerImg from '../../components/assets/img.jpg';
import DiscountForm from './discountForm/discountForm';
import GalleryItem from '../CategoriesPage/Gallery/galery';
import { fetchCategories } from '../../store/slices/categoriesSlice';


const MainPage = () => {
  const dispatch = useDispatch();
  const { list } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  
  return (
    <main>
      <div className={styles['home-container']}>

      {/* Header image */}
      <div className={styles['header-container']}>
        <img src={headerImg} alt="#" className={styles['header-image']} />
        <div className={styles['header-content']}>
          <h2>Amazing Discounts on Garden Products!</h2>
          <button className={styles['header-button']} >
              Check out
            </button>

        </div>
      </div>

      {/* image-gallery */}
      <div className={styles['gallery_container']}>
        <div className={styles['categories-container']}>
          <p id="categories"  className={styles.paragraph}>Categories</p>

          <div className={styles['line']}></div>
        </div>

        {/* Categories button */}
        <Link to="/categories" className={styles.all_categories_button}>
            All Categories
          </Link>
          </div>
         
          <div className={styles.categories}>
                {
                    list.map(el => <GalleryItem key={el.id} {...el}/>)
                }
            </div>
  <div className={styles.background_container}>
    <p className={styles.discount_text}>5% off on the first order
</p>
    <DiscountForm />
  </div>
  </div>
</main> 
  );
  };

export default MainPage;
