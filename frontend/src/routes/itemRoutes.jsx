// items
import FirstDogSuit from '../pages/products/type/dog-suits/FirstDogSuit'
import FirstCatSuit from '../pages/products/type/cat-suits/FirstCatSuit'
import SecondAccessory from '../pages/products/type/accessories/SecondAccessory'
import TheBusinessPooch from '../pages/products/type/dog-suits/TheBusinessPooch'
import MidnightBlack from '../pages/products/type/dog-suits/MidnightBlack'

// routing
export const itemRoutes = [
    { id: 1, path: '/products/dog-suits/first-dog-suit', component: <FirstDogSuit />},
    { id: 2, path: '/products/cat-suits/first-cat-suit', component: <FirstCatSuit />},
    { id: 3, path: '/products/accessories/second-accessory', component: <SecondAccessory />},
    { id: 4, path: '/products/dog-suits/the-business-pooch', component: <TheBusinessPooch />},
    { id: 5, path: '/products/dog-suits/midnight-black', component: <MidnightBlack />}
]