
import './App.css';
import React, {useState} from 'react'
import Footer from './Components/Footer/Footer';
import GoToCart from './Components/Cart/GoToCart';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ApiProducts from './Components/ProductCard/ApiProducts';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './Components/SignInRegister/Register';
import SignIn from './Components/SignInRegister/SignIn';
import BuyNow from './Components/Cart/BuyNow';
import ApiCart from './Components/Cart/ApiCart';

function App() {

const [cartProduct,getCartProduct] = useState([])
// function checkstat(){
//   console.log(cartProduct,"in appppppppppp")
// }

  return (
    <BrowserRouter>
    <div className="App">
     <Header shopname="Apple Store" />
     <Routes>
      <Route path='/' element={<Home setCartProductHome={getCartProduct}/>}></Route>
      <Route path='/ecom' element={<ApiProducts/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/buynow' element={<BuyNow product={cartProduct}/>}></Route>
      <Route path='/cart' element={<GoToCart cartProduct={cartProduct}/>}></Route>
      <Route path='/apicart' element={<ApiCart/>}></Route>
     </Routes>
     {/* <button onClick={checkstat}>check</button> */}
     <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
