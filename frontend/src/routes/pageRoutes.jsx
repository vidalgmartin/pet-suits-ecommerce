// pages
import Home from '../pages/home/Home'
import Checkout from '../pages/accounts/Checkout'
import User from '../pages/accounts/user/User'
import Login from '../pages/accounts/user/Login'
import Signup from '../pages/accounts/user/Signup'
import Admin from '../pages/accounts/Admin'
import AllProducts from '../pages/products/product-shop/AllProducts'
import CatProducts from '../pages/products/product-shop/CatProducts'
import DogProducts from '../pages/products/product-shop/DogProducts'
import AccessoriesProducts from '../pages/products/product-shop/AccessoriesProducts'
  
export const pageRoutes = [
    { id: 1, path: '/', component: <Home />},
    { id: 2, path: '/checkout', component: <Checkout />},
    { id: 3, path: '/user', component: <User /> },
    { id: 4, path: '/login', component: <Login /> },
    { id: 5, path: '/signup', component: <Signup />},
    { id: 6, path: '/admin', component: <Admin />},
    { id: 7, path: '/products/all', component: <AllProducts />},
    { id: 8, path: '/products/cat-suits', component: <CatProducts />},
    { id: 9, path: '/products/dog-suits', component: <DogProducts />},
    { id: 10, path: '/products/accessories', component: <AccessoriesProducts />},
]