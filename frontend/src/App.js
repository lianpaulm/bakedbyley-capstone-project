import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Faq from './pages/Faq/Faq';
import Products from './pages/Products/Products';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route exact path="/faq" element={<Faq />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
