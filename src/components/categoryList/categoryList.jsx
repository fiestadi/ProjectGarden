import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
const CategoryList = () => {
  const { id } = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [setLoading] = useState(true);

  useEffect(() => {
   const fetchData = async () => {
      try {
        const response = await fetch(` http://localhost:3333/categories/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const contentType = response.headers.get('content-type');
        
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          setCategoryData(data);
        } else {
          throw new Error('Response is not in JSON format');
        }

        setLoading(false);
    
      } catch (error) {
        console.error('Error fetching category:', error);
      }
    };

    fetchData();
  }, [id,setLoading]);

  if (!categoryData) {
   return <p>Категория не найдена</p>;
 }

  return (
   <div>
      <p>Category ID: {id}</p>
      <p>Category Title: {categoryData.title}</p>
    </div>
  );
};


export default CategoryList;