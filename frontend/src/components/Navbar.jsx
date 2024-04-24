import { useContext } from 'react'
import { AppContext } from '../App'
import { Link } from 'react-router-dom'
import './Components.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Navbar() {    
    const { toggleCartVisibility, thinNavbar, numOfItemsInCart } = useContext(AppContext)
    const { user } = useAuthContext()

    const userPath = user ? '/user' : '/login'
    
    return (
        <>
            <header className={`navbar ${thinNavbar ? 'thin' : ''}`}>
                <a href="/" className={`navbar-logo ${thinNavbar ? 'thin' : ''}`}></a>
                <ul className={`navbar-links-container ${thinNavbar ? 'thin' : ''}`}>
                    <li className={`navbar-link-container ${thinNavbar ? 'thin' : ''}`} onClick={toggleCartVisibility}>
                        <div className="navbar-link">
                            <p>Bag</p>
                            <span>{numOfItemsInCart.length > 0 ? numOfItemsInCart.length : '(0)' }</span>
                        </div>
                    </li>
                    <li className={`navbar-link-container ${thinNavbar ? 'thin' : ''}`}>
                        <Link to={userPath} className="navbar-link">
                            <p>Account</p>
                            <FontAwesomeIcon icon={faUserTie} className="navbar-icon" />
                        </Link>
                    </li>
                    {!thinNavbar && (
                        <li className={`navbar-link-container ${thinNavbar ? 'thin' : ''}`}>
                            <Link to="/checkout" className="navbar-link">
                                <p>Checkout</p>
                                <FontAwesomeIcon icon={faCartShopping} className="navbar-icon" />
                            </Link>
                        </li>
                    )}
                </ul>
            </header>
        </>
    )
}