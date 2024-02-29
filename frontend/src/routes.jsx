// pages & components
import Home from './pages/home/Home'
import Checkout from './pages/Checkout'
import Account from './pages/Account'
import Admin from './pages/admin/Admin'
import Products from './pages/products/Products'
import Cat from './pages/products/cat/Cat'
import Dog from './pages/products/dog/Dog'
import Acessories from './pages/products/acessories/Acessories'
import FirstDogSuit from './pages/products/dog/FirstDogSuit'
import FirstCatSuit from './pages/products/cat/FirstCatSuit'
import FirstAcessory from './pages/products/acessories/FirstAcessory'
import TheBusinessPooch from './pages/products/dog/TheBusinessPooch'

// routing
export const routes = [
    { id: 1, path: '/', component: <Home />},
    { id: 2, path: '/checkout', component: <Checkout />},
    { id: 3, path: '/account', component: <Account />},
    { id: 4, path: '/admin', component: <Admin />},
    { id: 5, path: '/products/all', component: <Products />},
    { id: 6, path: '/products/cat-suits', component: <Cat />},
    { id: 7, path: '/products/dog-suits', component: <Dog />},
    { id: 8, path: '/products/acessories', component: <Acessories />},
    { id: 9, path: '/products/dog-suits/first-dog-suit', component: <FirstDogSuit />},
    { id: 10, path: '/products/cat-suits/first-cat-suit', component: <FirstCatSuit />},
    { id: 11, path: '/products/acessories/first-acessory', component: <FirstAcessory />},
    { id: 12, path: '/products/dog-suits/the-business-pooch', component: <TheBusinessPooch />}
]
