// react router to create multiple pages
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/home/Home'
import Checkout from './pages/Checkout'
import Account from './pages/Account'

// pages/products
import Products from './pages/products/Products'
import Cat from './pages/products/cat/Cat'
import Dog from './pages/products/dog/Dog'
import Acessories from './pages/products/acessories/Acessories'

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
              path="/"
              element={<Home />}
            />
            <Route 
              path="/checkout"
              element={<Checkout />}
            />
            <Route 
              path="/account"
              element={<Account />}
            />
            <Route 
              path="/products"
              element={<Products />}
            />
            <Route 
              path="/products/cat-suits"
              element={<Cat />}
            />
            <Route 
              path="/products/dog-suits"
              element={<Dog />}
            />
            <Route 
              path="/products/acessories"
              element={<Acessories />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}