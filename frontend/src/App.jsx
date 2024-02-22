// react router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from './routes'

// global components
import Navbar from './components/Navbar'

// main app
export default function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {routes.map((route) => <Route
              key={route.id}
              path={route.path}
              element={route.component}
          />)}
        </Routes>
      </BrowserRouter>
    </>
  )
}