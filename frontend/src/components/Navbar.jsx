import { Link } from 'react-router-dom'

export default function Navbar() {
    
    return (
        <header className="navbar">
            <Link to="/home">
                <div className="navbar-icon">
                    ICON
                </div>
            </Link>
            <ul className="navbar-links">
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