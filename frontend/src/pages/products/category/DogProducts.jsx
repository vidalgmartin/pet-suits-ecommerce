import { Link } from 'react-router-dom'
import Item from '../../../components/items/Item'
import '../Products.css'

export default function Dog() {
    
     return (
        <div className="products-page">
            <header className="products-header">
                <div>
                    IMAGE GOES HERE
                </div>

                <h2>Find the perfect suit for your Dodge</h2>
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