
import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/main';
import Categories from './pages/Categories/categories';
import AllProducts from './pages/AllProducts/allproducts';
import Navbar from './components/Navbar/navbar';
import Section from './hook/useParams/section';



function App() {
// useEffect(() => {
//     fetch("http://localhost:3333/products/all")
//   }, []);
  return(
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/section/:sectionId" element={<Section />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/allproducts" element={<AllProducts />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
