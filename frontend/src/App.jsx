// react & react router
import { useState, createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { pageRoutes } from './routes/pageRoutes.jsx'
import { itemRoutes } from './routes/itemRoutes.jsx'

// global components
import Navbar from './components/Navbar'
import Cart from './components/items/Cart'

// Context for cart visibility across the app 
export const AppContext = createContext()

// main app
export default function App() {
  const [ visibleCart, setVisibleCart ] = useState(false)
  const [ thinNavbar, setThinNavbar ] = useState(false)

  const toggleCartVisibility = () => {
    setVisibleCart(!visibleCart)
  }

  const updateNavbar = (value) => {
    setThinNavbar(value)
  } 

  return (
    <>
      <AppContext.Provider value={{toggleCartVisibility, thinNavbar, updateNavbar}}>
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
      </AppContext.Provider>
    </>
  )
}