import { useContext } from 'react'
import { AppContext } from '../App'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import './Components.css'

export default function Navbar() {    
    const { toggleCartVisibility, thinNavbar } = useContext(AppContext)

    return (
        <>
            <header className={`navbar ${thinNavbar ? 'thin' : ''}`}>
                <Link to="/" className={`navbar-icon ${thinNavbar ? 'thin' : ''}`}></Link>
                <ul className={`navbar-links ${thinNavbar ? 'thin' : ''}`}>
                    <ul className="navbar-link" onClick={toggleCartVisibility}>
                        <li>
                            Cart
                        </li>
                        <li>
                            0
                        </li>
                    </ul>
                    <Link to="/account" className="navbar-link">
                        <li>
                            Account
                        </li>
                        <li>
                            0
                        </li>
                    </Link>
                    <Link to="/admin" className="navbar-link">
                        <li>
                            Admin
                        </li>
                        <li>
                            0
                        </li>
                    </Link>
                    <Link to="/checkout" className="navbar-link">
                        <li>
                            Checkout
                        </li>
                        <li>
                            0
                        </li>
                    </Link>
                </ul>
            </header>
        </>
    )
}