// react router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { pageRoutes } from './routes/pageRoutes.jsx'
import { itemRoutes } from './routes/itemRoutes.jsx'

// global components
import Navbar from './components/Navbar'

// main app
export default function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
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
    </>
  )
}