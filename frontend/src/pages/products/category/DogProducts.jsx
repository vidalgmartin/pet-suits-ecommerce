import { useEffect, useContext } from 'react'
import { AppContext } from '../../../App'
import { Link } from 'react-router-dom'
import Item from '../../../components/items/Item'
import '../Products.css'

export default function Dog() {
    const { updateNavbar } = useContext(AppContext)

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
        <div className="products-page">
            
            <header className="products-header dog-products-banner">
                <p>Canine Chic Zone</p>
            </header>

            <section className="products-page-content">
                <ul className="filter-products">
                    <p>By Category:</p>

                    <Link className="products-link" to="/products/cat-suits">Cat Suits</Link>

                    <Link className="products-link" to="/products/dog-suits">Dog Suits</Link>

                    <Link className="products-link" to="/products/accessories">Accessories</Link>

                    <Link className="products-link" to="/products/all">Shop All</Link>
                </ul>

                <div className="product-container">
                    <Item itemUrl="/api/suits/dog-suits" />
                </div>

            </section>
        </div>
     )
}