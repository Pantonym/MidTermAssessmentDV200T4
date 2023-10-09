import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

// pages 
import Products from './Pages/products'
import Login from './Pages/login'
import SingleProduct from './Pages/singleproduct';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/' element={<Products />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/SingleProduct' element={<SingleProduct />} />
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;