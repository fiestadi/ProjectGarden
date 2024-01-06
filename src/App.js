import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import MainPage from './pages/MainPage/main';
import AllProducts from './pages/ProductsPage/allproducts';
import Allsales from './pages/AllSalesPage/allsales';
import Navbar from './components/Navbar/navbar';
import NotFoundPage from './pages/NotFoundPage/404';
import CategoriesPage from './pages/CategoriesPage/categories';
import {fetchCategories} from './store/slices/categoriesSlice';
import { useDispatch } from 'react-redux';
import Footer from './components/Footer/footer';

// import Section from './hook/useParams/section';

function App() {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(fetchCategories())
  },[dispatch])
  return (
  
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/section/:sectionId" element={<Section />} /> */}
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/products/all" element={<AllProducts />} />
          <Route path="/allsales" element={<Allsales />} />
          <Route path='/*' element={<NotFoundPage/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
