// pages & components
import Home from './pages/home/Home'
import Checkout from './pages/Checkout'
import Account from './pages/Account'
import Products from './pages/products/Products'
import Cat from './pages/products/cat/Cat'
import Dog from './pages/products/dog/Dog'
import Acessories from './pages/products/acessories/Acessories'

// routing
export const routes = [
    { id: 1, path: '/', component: <Home />},
    { id: 2, path: '/checkout', component: <Checkout />},
    { id: 3, path: '/account', component: <Account />},
    { id: 4, path: '/products', component: <Products />},
    { id: 5, path: '/products/cat-suits', component: <Cat />},
    { id: 6, path: '/products/dog-suits', component: <Dog />},
    { id: 7, path: '/products/acessories', component: <Acessories />}
]
