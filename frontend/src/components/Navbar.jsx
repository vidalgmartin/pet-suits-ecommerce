import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'
import { Link } from 'react-router-dom'
import './Components.css'

export default function Navbar() {    
    const { toggleCartVisibility, thinNavbar, numOfItemsInCart } = useContext(AppContext)
    
    return (
        <>
            <header className={`navbar ${thinNavbar ? 'thin' : ''}`}>
                <Link to="/" className={`navbar-icon ${thinNavbar ? 'thin' : ''}`}></Link>
                <ul className={`navbar-links-container ${thinNavbar ? 'thin' : ''}`}>
                    <li className={`navbar-link-container ${thinNavbar ? 'thin' : ''}`} onClick={toggleCartVisibility}>
                        <div className="navbar-link">
                            <p>Cart</p>
                            <span>{numOfItemsInCart.length > 0 ? numOfItemsInCart.length : '(0)' }</span>
                        </div>
                    </li>
                    <li className={`navbar-link-container ${thinNavbar ? 'thin' : ''}`}>
                        <Link to="/User" className="navbar-link">
                            <p>Account</p>
                            <span>0</span>
                        </Link>
                    </li>
                    {!thinNavbar && (
                        <li className={`navbar-link-container ${thinNavbar ? 'thin' : ''}`}>
                            <Link to="/about" className="navbar-link">
                                <p>About</p>
                                <span>0</span>
                            </Link>
                        </li>
                    )}
                    {!thinNavbar && (
                        <li className={`navbar-link-container ${thinNavbar ? 'thin' : ''}`}>
                            <Link to="/checkout" className="navbar-link">
                                <p>Checkout</p>
                                <span>0</span>
                            </Link>
                        </li>
                    )}
                </ul>
            </header>
        </>
    )
}