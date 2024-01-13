import React from 'react';
import { useEffect } from 'react';
// import styles from './product.module.css';
import ProductItem from './products/products';
import { useDispatch,useSelector} from 'react-redux';
import styles from './product.module.css';
import { fetchProducts } from '../../store/slices/productSlice';
const ProductsPage = () => {
  
    const dispatch = useDispatch()
  
   
    useEffect(() => {
        dispatch(fetchProducts());
      }, [dispatch]);

      useEffect(() => {
        document.title = "All Products"
    },[]);
    
     
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