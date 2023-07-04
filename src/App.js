import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './Home';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/:productID" element={<ProductPage />} />
      </Routes>
      <Cart />
    </div>
  );
}

export default App;
