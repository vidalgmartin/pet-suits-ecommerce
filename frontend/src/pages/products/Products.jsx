import { Link } from 'react-router-dom'
import './Products.css'

export default function Products() {

    return (
        <div className="products-page">

            <header className="products-header">
                <div>
                    IMAGE GOES HERE
                </div>

                <h2>Find the perfect suit for your pooch</h2>
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
                </ul>

                <div className="all-products">
                    Products go here
                </div>
            </section>

        </div>
    )
}