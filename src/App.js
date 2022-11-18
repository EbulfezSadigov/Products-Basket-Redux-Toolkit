import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar';
import Cart from './components/cart';
import Home from './components/home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    );
  }
}

export default App;
