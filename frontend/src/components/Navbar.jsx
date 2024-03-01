import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from './items/Cart'
import './Components.css'

export default function Navbar() {
    const [ smallNavbar, setSmallNavbar ] = useState(false)
    const [ visibleCart, setVisibleCart ] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setSmallNavbar(true)
            } else {
                setSmallNavbar(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
    }, [])

    const toggleCartVisibility = () => {
        setVisibleCart(!visibleCart)
    }
    
    return (
        <>
            <header className={`navbar ${smallNavbar ? 'small' : ''}`}>
                <Link to="/">
                    <div className={`navbar-icon ${smallNavbar ? 'small' : ''}`}>
                        HEY THERE
                    </div>
                </Link>

                <ul className={`navbar-links ${smallNavbar ? 'small' : ''}`}>
                    <li className="navbar-cart-button" onClick={toggleCartVisibility}>
                        Cart
                    </li>

                    <Link to="/account">
                        <li>
                            Account
                        </li>
                    </Link>
                    <Link to="/admin">
                        <li>
                            Admin
                        </li>
                    </Link>
                </ul>
            </header>

            {visibleCart && <Cart toggleVisibleCart={setVisibleCart} />}
        </>
    )
}