import React,{useEffect}  from 'react'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import MainPage from './pages/MainPage/main';
import AllProducts from './pages/ProductsPage/allproducts';
import Allsales from './pages/AllSalesPage/allsales';
import Navbar from './components/Navbar/navbar';
import CategoriesPage from './pages/CategoriesPage/categories';
import {fetchCategories} from './store/slices/categoriesSlice';
import { fetchProducts } from './store/slices/productSlice';
import { useDispatch } from 'react-redux';
import Footer from './components/Footer/footer';
import SinglePage from './pages/SingleProductPage/singlePage';
import NotFoundPage from './pages/NotFoundPage/404';
import CategoryList from './components/categoryList/categoryList';
import BasketPage from './pages/BacketPage/basket';


function App() {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(fetchCategories())
    dispatch(fetchProducts())
  },[dispatch])
  return (
  
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path='/categories/:categoryTitle/:id' element={<CategoryList/>}/>
          <Route path="/allproducts" element={<AllProducts/>} />
          <Route path="/allsales" element={<Allsales />} />
         <Route path="/product/:id" element={<SinglePage/>}/>
          <Route path='/basket' element={<BasketPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
