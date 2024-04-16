import { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../App'
import Item from '../../../components/items/Item'
import '../Products.css'

export default function Products() {
    const { handleScrollAndResize } = useContext(AppContext)
    
    window.addEventListener('scroll', handleScrollAndResize)
    window.addEventListener('resize', handleScrollAndResize)

    useEffect(() => {
        handleScrollAndResize()
    }, [])

    return (
        <div className="products-page">

            <header className="products-header all-products-banner">
                <p>Paws & Tails Paradise</p>
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