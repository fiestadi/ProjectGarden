import React from 'react';
import { useEffect } from 'react';
// import styles from './product.module.css';
import ProductItem from '../ProductsPage/products/pdoducts';
import { useDispatch,useSelector} from 'react-redux';
import styles from './product.module.css';
import { fetchProducts } from '../../store/slices/productSlice';
import { useParams } from 'react-router-dom';
const ProductsPage = () => {
  const { categoryTitle, categoryID, sales } = useParams()
    const dispatch = useDispatch()
  
   
    useEffect(() => {
        dispatch(fetchProducts());
      }, [dispatch]);
     
      const products = useSelector(state => state.products.data)
    return (
       <div className={styles.conteinerProducts} >
                { 
                   products.map(el => <ProductItem key={el.id} item={el}/>)
                }
            </div>
    );
};

export default ProductsPage;