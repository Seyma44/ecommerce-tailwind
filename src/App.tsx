import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import PromoSections from './components/PromoSections';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import CategoryFilters from './components/CategoryFilters';
import ProductFeatures from './components/ProductFeatures';
import CategoryPreview from './components/CategoryPreview';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <Router>
      <Navigation />
      <PromoSections />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="category-filters" element={<CategoryFilters />} />
      </Routes>
      <CategoryPreview/>
      <ProductFeatures/>
      <Footer/>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Outlet /> {/* Nested routes will be rendered here */}
      <Products /> {/* Render the Products component on the home page */}
    </div>
  );
}

export default App;
