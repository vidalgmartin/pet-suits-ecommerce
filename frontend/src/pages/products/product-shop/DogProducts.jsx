import { useEffect, useContext } from 'react'
import { AppContext } from '../../../App'
import { Link } from 'react-router-dom'
import Item from '../../../components/items/Item'
import '../Products.css'
import { backendUrl } from '../../../backendUrl'

export default function Dog() {
    const { handleScrollAndResize } = useContext(AppContext)
    
    window.addEventListener('scroll', handleScrollAndResize)
    window.addEventListener('resize', handleScrollAndResize)

    useEffect(() => {
        handleScrollAndResize()
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
                    <Item itemUrl={`${backendUrl}/api/suits/dog-suits`} />
                </div>

            </section>
        </div>
     )
}