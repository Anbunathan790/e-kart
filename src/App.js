import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import WishList from './pages/WishList';
import Header from './components/Header'
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="App">
    <h1>Flopcart</h1>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<WishList/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
