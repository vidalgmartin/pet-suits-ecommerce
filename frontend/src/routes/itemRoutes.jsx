// items
import FirstDogSuit from '../pages/products/type/dog-suits/FirstDogSuit'
import FirstCatSuit from '../pages/products/type/cat-suits/FirstCatSuit'
import FirstAcessory from '../pages/products/type/accessories/FirstAcessory'
import TheBusinessPooch from '../pages/products/type/dog-suits/TheBusinessPooch'

// routing
export const itemRoutes = [
    { id: 1, path: '/products/dog-suits/first-dog-suit', component: <FirstDogSuit />},
    { id: 2, path: '/products/cat-suits/first-cat-suit', component: <FirstCatSuit />},
    { id: 3, path: '/products/acessories/first-acessory', component: <FirstAcessory />},
    { id: 4, path: '/products/dog-suits/the-business-pooch', component: <TheBusinessPooch />}
]