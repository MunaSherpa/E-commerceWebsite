
import { BrowserRouter  as Router, Route, Routes} from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import Checkout from './Pages/Auth/Cart/Checkout'
import Product from './Pages/Auth/Product'
// import CartPage from './Pages/Auth/Cart/CartPage'



function App() {
  

  return (
    <>
     <Router>

      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/home' element={<Homepage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/product' element={<Product/>} />
        {/* <Route path='/cart' element={< CartPage />} /> */}
        <Route path='/checkout' element={< Checkout />} />
             
      </Routes>
     </Router>
    </>
  )
}

export default App
