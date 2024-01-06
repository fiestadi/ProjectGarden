import React, { useEffect } from 'react';
import styles from './categories.module.css';
import { useSelector } from 'react-redux';
import ButtonLink from '../../components/ButtonNavigation/button';
import GalleryItem from './Gallery/galery';

const CategoriesPage = () => {

    const { list } = useSelector(state => state.categories)

    useEffect(() => {
        document.title = "Categories"
    },[])

    return (
      <div className={styles.categoriesPage}>
        {/* Navigation Links */}
        
      <ButtonLink />

        <div className={styles.categoriesItem}>
        <p className={styles.title}>Categories</p>
        
            <div className={styles.categories}>
                {
                    list.map(el => <GalleryItem key={el.id} {...el}/>)
                }
            </div>
            </div>
        </div>
    );
};

export default CategoriesPage;