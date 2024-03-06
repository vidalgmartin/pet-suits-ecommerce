import { useEffect, useState, useContext } from 'react'
import { CartContext } from '../App'
import { Link } from 'react-router-dom'
import './Components.css'

export default function Navbar() {    
    const [ smallNavbar, setSmallNavbar ] = useState(false)

    const toggleCartVisibility = useContext(CartContext)

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
    
    return (
        <>
            <header className={`navbar ${smallNavbar ? 'small' : ''}`}>
                <Link to="/">
                    <div className={`navbar-icon ${smallNavbar ? 'small' : ''}`}>
                        HEY THERE
                    </div>
                </Link>

                <ul className={`navbar-links ${smallNavbar ? 'small' : ''}`}>
                    <ul className="navbar-cart-button" onClick={toggleCartVisibility}>
                        <li>
                            Cart
                        </li>
                        <li>
                            0
                        </li>
                    </ul>

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
                    <Link to="/checkout">
                        <li>
                            Checkout
                        </li>
                    </Link>
                </ul>
            </header>
        </>
    )
}