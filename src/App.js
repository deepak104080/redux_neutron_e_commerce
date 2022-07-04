import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Orders from './components/Orders';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Admin_Add_Product from './components/Admin_Add_Product';
import Admin_Product_List from './components/Admin_Product_List';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/productlist' element={<ProductList/>}/>
          <Route path='/productdetail/:id' element={<ProductDetail/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/admin_add_product' element={<Admin_Add_Product/>}/>
          <Route path='/admin_product_list' element={<Admin_Product_List/>}/>
          
        </Routes>
        <Footer/>
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