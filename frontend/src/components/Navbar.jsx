import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'
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
                <Link to="/home">
                    <div className={`navbar-icon ${smallNavbar ? 'small' : ''}`}>
                        ICON
                    </div>
                </Link>

                <ul className={`navbar-links ${smallNavbar ? 'small' : ''}`}>
                    <button className="navbar-cart-button" onClick={toggleCartVisibility}>
                        Cart
                    </button>

                    <Link to="/account">
                        <li>
                            Account
                        </li>
                    </Link>
                </ul>
            </header>

            {visibleCart && <Cart toggleVisibleCart={setVisibleCart} />}
        </>
    )
}