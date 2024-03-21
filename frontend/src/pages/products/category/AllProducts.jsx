import { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../App'
import Item from '../../../components/items/Item'
import '../Products.css'

export default function Products() {
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

            <header className="products-header all-products-banner">
                <h2>Find the perfect suit</h2>
            </header>

            <section className="products-page-content">
                <ul className="filter-products">
                    <p>By Category:</p>

                    <Link className="products-link" to="/products/cat-suits">Cat Suits</Link>
                   
                    <Link className="products-link" to="/products/dog-suits">Dog Suits</Link>
                 
                    <Link className="products-link" to="/products/accessories">Accessories</Link>
                </ul>

                <div className="product-container">
                    <Item itemUrl="/api/suits" />
                </div>
                
            </section>

        </div>
    )
}