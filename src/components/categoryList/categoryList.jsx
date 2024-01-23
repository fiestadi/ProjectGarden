import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from '../../pages/ProductsPage/productsItem/products';
import styles from './categoryList.module.css'
import Filter from '../filter/filter';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';

const CategoryList = () => {
  const { id, categoryTitle } = useParams();
  const [categoryData, setCategoryData] = useState(null);
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
  
        } else {
          throw new Error('Response is not in JSON format');
        }
       
      } catch (error) {
        console.error('Error fetching category:', error);
      
      }
    };

    fetchData();
  }, [id]);

  if (!categoryData) {
   return <p>Categoru is not found</p>;
 }
 const breadcrumbsData = [
  { path: '/', label: 'Main Page' },
  { path: '/categories', label: 'Categories' },
  { path: 'products/fetchAllProductsList', label: categoryTitle },
 
];

  return (
    <div>
    <Breadcrumbs breadcrumbs={breadcrumbsData} />
   
       <p className={styles.title}>{categoryData.category.title}</p>


       <div className={styles.productWrapper}>
        <Filter />
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