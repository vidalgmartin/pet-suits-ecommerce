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

                <h2>Find the perfect suit for your dodge</h2>
            </header>

            <section className="products-page-content">
                <ul className="filter-products">
                    <p>By Category:</p>

                    <li>
                        <Link to="/products/cat-suits">Cat Suits</Link>
                    </li>
                    <li>
                        <Link to="/products/dog-suits">Dog Suits</Link>
                    </li>
                    <li>
                        <Link to="/products/accessories">Accessories</Link>
                    </li>
                    <li>
                        <Link to="/products/all">Shop All</Link>
                    </li>
                </ul>

                <div className="product-container">
                    <Item itemUrl="/api/suits/dog-suits" />
                </div>

            </section>
        </div>
     )
}