import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Components.css'

export default function Navbar() {
    const [ smallNavbar, setSmallNavbar ] = useState(false)

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
        <header className={`navbar ${smallNavbar ? 'small' : ''}`}>
            <Link to="/home">
                <div className={`navbar-icon ${smallNavbar ? 'small' : ''}`}>
                    ICON
                </div>
            </Link>
            <ul className={`navbar-links ${smallNavbar ? 'small' : ''}`}>
                <Link to="/shopping-cart">
                    <li>
                        Cart
                    </li>
                </Link>
                <Link to="/account">
                    <li>
                        Account
                    </li>
                </Link>
            </ul>
        </header>
    )
}