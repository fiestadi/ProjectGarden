// import React from 'react';
// import styles from './product.module.css';
// import ProductItem from '../../components/ProductItem';
// import { useDispatch} from 'react-redux';
// import { useLocation, useParams } from 'react-router-dom';

// import { useEffect } from 'react';
// const ProductsPage = () => {
//     const { categoryTitle, categoryID, sales } = useParams()
//     const dispatch = useDispatch()
//     const location = useLocation()

//     useEffect(() => {
//         dispatch(resetFilter())
//     },[dispatch])


//     const products = useSelector(({ products: { data } }) => {
//         if (sales) {
//             return data.filter(el => !!el.discount_price)
//         } else {
//             return categoryID ? data.filter(({ categoryId }) => +categoryID === categoryId) : data
//         }
//     })
     

//     return (
//        <div className={styles.products_container}>
//                 { 
//                    products.map(el => <ProductItem key={el.id} {...el}/>)
//                 }
//             </div>
//     );
// };

// export default ProductsPage;