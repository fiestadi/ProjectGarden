import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from '../../pages/ProductsPage/productsItem/products';
import styles from './categoryList.module.css'

const CategoryList = () => {
  const { id } = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  
  useEffect(() => {
   const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3333/categories/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
      
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const contentType = response.headers.get('content-type');
        
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json()
          setCategoryData(data);
          console.log(data)
        } else {
          throw new Error('Response is not in JSON format');
        }

        setLoading(false);
    
      } catch (error) {
        console.error('Error fetching category:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!categoryData) {
   return <p>Categoru is not found</p>;
 }

  return (
    <div>
       <p className={styles.title}>{categoryData.category.title}</p>
       <div className={styles.productWrapper}>
       <div className={styles.productContainer}>
    {categoryData.data.map((product) => (
      <ProductItem key={product.id} item={product} />
   
    ))}
  </div>
  </div>
  </div>
  );
};


export default CategoryList;