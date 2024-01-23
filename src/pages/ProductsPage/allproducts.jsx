import React from 'react';
import { useEffect } from 'react';
import ProductItem from './productsItem/products';
import { useDispatch,useSelector} from 'react-redux';
import styles from './product.module.css';
import { fetchProducts } from '../../store/slices/productSlice';
import Filter from '../../components/filter/filter';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';



const ProductsPage = () => {
  
    const dispatch = useDispatch()
  
   
    useEffect(() => {
        dispatch(fetchProducts());
      }, [dispatch]);
    
      useEffect(() => {
        document.title = "All Products"
    },[])
     
      const products = useSelector(state => state.products.data)
      const breadcrumbsData = [
        { path: '/', label: 'Main Page' },
        { path: '/allproducts', label: 'All Products'},
       
      ];
    return (
      <>
      <Breadcrumbs breadcrumbs={breadcrumbsData} />
      <div className={styles.allProduct_wrapper}>
      <p className={styles.allProduct_title}>All Products</p>
      <Filter />
      </div>
       <div className={styles.conteinerProducts} >
       
                { 
                   products.map(el => <ProductItem key={el.id} item={el}/>)
                }
            </div>
            </>
    );
};

export default ProductsPage;