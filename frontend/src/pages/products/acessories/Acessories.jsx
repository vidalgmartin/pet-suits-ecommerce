import { Link } from 'react-router-dom'
import Item from '../../../components/Item'
import '../Products.css'

export default function Acessories() {
    
     return (
        <div className="products-page">
            <header className="products-header">
                <div>
                    IMAGE GOES HERE
                </div>

                <h2>Find the perfect acessory for your pooch and dodge</h2>
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
                        <Link to="/products/acessories">Acessories</Link>
                    </li>
                    <li>
                        <Link to="/products">Shop All</Link>
                    </li>
                </ul>

                <div className="product-container">
                    <Item itemUrl="/api/suits/acessories" />
                </div>
            </section>
        </div>
     )
}