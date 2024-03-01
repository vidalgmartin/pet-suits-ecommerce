// pages
import Home from '../pages/home/Home'
import Checkout from '../pages/Checkout'
import Account from '../pages/accounts/Account'
import Admin from '../pages/accounts/Admin'
import AllProducts from '../pages/products/category/AllProducts'
import CatProducts from '../pages/products/category/CatProducts'
import DogProducts from '../pages/products/category/DogProducts'
import AcessoriesProducts from '../pages/products/category/AcessoriesProducts'

// routing
export const pageRoutes = [
    { id: 1, path: '/', component: <Home />},
    { id: 2, path: '/checkout', component: <Checkout />},
    { id: 3, path: '/account', component: <Account />},
    { id: 4, path: '/admin', component: <Admin />},
    { id: 5, path: '/products/all', component: <AllProducts />},
    { id: 6, path: '/products/cat-suits', component: <CatProducts />},
    { id: 7, path: '/products/dog-suits', component: <DogProducts />},
    { id: 8, path: '/products/acessories', component: <AcessoriesProducts />}
]
