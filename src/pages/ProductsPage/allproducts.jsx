import React,{useState,useEffect} from 'react';
import ProductItem from './productsItem/products';
import { useDispatch,useSelector} from 'react-redux';
import styles from './product.module.css';
import { fetchProducts } from '../../store/slices/productSlice';
import Filter from '../../components/filter/filter';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';



const ProductsPage = () => {
  
    const dispatch = useDispatch()
    const [filterParams, setFilterParams] = useState({});
    const [filteredProducts, setFilteredProducts] = useState([]);

   
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
      const handleFilterChange = (newParams) => {
  
        setFilterParams(newParams);
    };
    useEffect(() => {
      const filterProducts = (products, filterParams) => {
          return products.filter(product => {
              if (filterParams.minPrice && product.price < filterParams.minPrice) {
                  return false;
              }
              if (filterParams.maxPrice && product.price > filterParams.maxPrice) {
                  return false;
              }
              if (filterParams.discount && !product.discounted) {
                  return false;
              }
              return true;
          });
      };
      
      const filteredProducts = filterProducts(products, filterParams);
      setFilteredProducts(filteredProducts); 
  }, [products, filterParams]);

    return (
      <>
      <Breadcrumbs breadcrumbs={breadcrumbsData} />
      <div className={styles.allProduct_wrapper}>
      <p className={styles.allProduct_title}>All Products</p>
      <Filter onChange={handleFilterChange}  />
      </div>
       <div className={styles.conteinerProducts} >
       
                { 
                   filteredProducts.map(el => <ProductItem key={el.id} item={el}/>)
                }
            </div>
            </>
    );
};

export default ProductsPage;