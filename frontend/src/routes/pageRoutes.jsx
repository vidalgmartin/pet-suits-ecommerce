// pages
import Home from '../pages/home/Home'
import Checkout from '../pages/accounts/Checkout'
import User from '../pages/accounts/user/User'
import Admin from '../pages/accounts/Admin'
import AllProducts from '../pages/products/category/AllProducts'
import CatProducts from '../pages/products/category/CatProducts'
import DogProducts from '../pages/products/category/DogProducts'
import AccessoriesProducts from '../pages/products/category/AccessoriesProducts'

// routing
export const pageRoutes = [
    { id: 1, path: '/', component: <Home />},
    { id: 2, path: '/checkout', component: <Checkout />},
    { id: 3, path: '/user', component: <User />},
    { id: 4, path: '/admin', component: <Admin />},
    { id: 5, path: '/products/all', component: <AllProducts />},
    { id: 6, path: '/products/cat-suits', component: <CatProducts />},
    { id: 7, path: '/products/dog-suits', component: <DogProducts />},
    { id: 8, path: '/products/accessories', component: <AccessoriesProducts />}
]
