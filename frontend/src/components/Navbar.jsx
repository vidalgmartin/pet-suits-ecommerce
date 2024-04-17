import { useContext } from 'react'
import { AppContext } from '../App'
import { Link } from 'react-router-dom'
import './Components.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {    
    const { toggleCartVisibility, thinNavbar, numOfItemsInCart } = useContext(AppContext)
    
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
                        <Link className="navbar-link" onClick={() => alert('User Authentication in progress')}>
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