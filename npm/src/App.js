import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

// pages 
import Products from './pages/products'
import Login from './pages/login'

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/' element={<Products />} />
        <Route path='/Login' element={<Login/>}/>
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;