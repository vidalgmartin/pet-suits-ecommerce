// items
import MidnightBlack from '../pages/products/type/dog-suits/MidnightBlack'
import CrimsonRed from '../pages/products/type/dog-suits/CrimsonRed'
import SnowWhite from '../pages/products/type/dog-suits/SnowWhite'
import SapphireBlue from '../pages/products/type/cat-suits/SapphireBlue'
import GoldenYellow from '../pages/products/type/cat-suits/GoldenYellow'
import MidnightBlackFeline from '../pages/products/type/cat-suits/MidnightBlackFeline'
import GoldenWatch from '../pages/products/type/accessories/GoldenWatch'
import SilverHandkerchief from '../pages/products/type/accessories/SilverHandkerchief'

// routing
export const itemRoutes = [
    { id: 1, path: '/products/dog-suits/midnight-black', component: <MidnightBlack />},
    { id: 2, path: '/products/dog-suits/royal-crimson-red', component: <CrimsonRed />},
    { id: 3, path: '/products/dog-suits/snow-white-elegance', component: <SnowWhite />},
    { id: 4, path: '/products/cat-suits/sapphire-blue-night', component: <SapphireBlue />},
    { id: 5, path: '/products/cat-suits/golden-yellow-sunshine', component: <GoldenYellow />},
    { id: 6, path: '/products/cat-suits/midnight-black-feline', component: <MidnightBlackFeline />},
    { id: 7, path: '/products/accessories/golden-elegance-timepiece', component: <GoldenWatch />},
    { id: 8, path: '/products/accessories/silken-silver-handkerchief', component: <SilverHandkerchief />}
]