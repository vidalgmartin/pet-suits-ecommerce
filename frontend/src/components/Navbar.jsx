import { useEffect, useContext } from 'react'
import { AppContext } from '../App'
import { Link } from 'react-router-dom'
import './Components.css'

export default function Navbar() {    
    const { thinNavbar, updateNavbar } = useContext(AppContext)

    const { toggleCartVisibility } = useContext(AppContext)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                updateNavbar(true)
            } else {
                updateNavbar(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
    }, [])
    
    return (
        <>
            <header className={`navbar ${thinNavbar ? 'thin' : ''}`}>
                <Link to="/">
                    <div className={`navbar-icon ${thinNavbar ? 'thin' : ''}`}>
                        HEY THERE
                    </div>
                </Link>

                <ul className={`navbar-links ${thinNavbar ? 'thin' : ''}`}>
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