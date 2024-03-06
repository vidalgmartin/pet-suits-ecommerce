// react & react router
import { useState, createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { pageRoutes } from './routes/pageRoutes.jsx'
import { itemRoutes } from './routes/itemRoutes.jsx'

// global components
import Navbar from './components/Navbar'
import Cart from './components/items/Cart'

// Context for cart visibility across the app 
export const CartContext = createContext()

// main app
export default function App() {
  const [ visibleCart, setVisibleCart ] = useState(false)

  const toggleCartVisibility = () => {
    setVisibleCart(!visibleCart)
  }

  return (
    <>
      <CartContext.Provider value={toggleCartVisibility}>
        <BrowserRouter>
          <Navbar />
          {visibleCart && <Cart />}
          <Routes>
            {pageRoutes.map((route) => <Route
                key={route.id}
                path={route.path}
                element={route.component}
            />)}
            {itemRoutes.map((route) => <Route
                  key={route.id}
                  path={route.path}
                  element={route.component}
              />)}
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  )
}