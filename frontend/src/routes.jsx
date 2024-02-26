// pages & components
import Home from './pages/home/Home'
import Checkout from './pages/Checkout'
import Account from './pages/Account'
import Admin from './pages/admin/Admin'
import Products from './pages/products/Products'
import Cat from './pages/products/cat/Cat'
import Dog from './pages/products/dog/Dog'
import Acessories from './pages/products/acessories/Acessories'

// routing
export const routes = [
    { id: 1, path: '/', component: <Home />},
    { id: 2, path: '/checkout', component: <Checkout />},
    { id: 3, path: '/account', component: <Account />},
    { id: 4, path: '/admin', component: <Admin />},
    { id: 5, path: '/products', component: <Products />},
    { id: 6, path: '/products/cat-suits', component: <Cat />},
    { id: 7, path: '/products/dog-suits', component: <Dog />},
    { id: 8, path: '/products/acessories', component: <Acessories />}
]
