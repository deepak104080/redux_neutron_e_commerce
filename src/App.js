import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/productdetail' element={<ProductDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



// JS
// REACT
// ANGULAR


// redux
// react-redux



// bootstrap
// react-bootstrap