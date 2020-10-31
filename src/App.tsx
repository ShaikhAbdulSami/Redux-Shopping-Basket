import React from 'react';
import './App.css';
import Products from './Components/Products/index';
import Cart from './Components/Cart';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import { NavBar } from './Components/NavBar';
import { Main } from './Components';
import Footer from './Components/Footer';



function App() {
  return (
    <Router>
        <div className="App">
          <NavBar />
          {/* Shaikh store
          <Link to='/products'> <button>Products</button> </Link>
          <Link to='/cart'> <button>Cart</button> </Link> */}
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/products' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer />
        </div>
    </Router>

  );
}

export default App;
