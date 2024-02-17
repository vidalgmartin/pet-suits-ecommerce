// react router to create multiple pages
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Account from './pages/Account'

// components
import Navbar from './components/Navbar'

// main app
export default function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/home"
              element={<Home />}
            />
            <Route 
              path="/shopping-cart"
              element={<Cart />}
            />
            <Route 
              path="/checkout"
              element={<Checkout />}
            />
            <Route 
              path="/account"
              element={<Account />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}