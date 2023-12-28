
import React from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import MainPage from './pages/MainPage/main';
import Categories from './pages/Categories/categories';
import AllProducts from './pages/AllProducts/allproducts';
import Allsales from './pages/AllSales/allsales';
import Navbar from './components/Navbar/navbar';
import Section from './hook/useParams/section';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/section/:sectionId" element={<Section />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/allsales" element={<Allsales />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
