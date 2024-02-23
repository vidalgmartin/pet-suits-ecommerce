import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

export default function Products() {
    const [ allProducts, setAllProducts ] = useState([])

    useEffect(() => {
        const fetchAllProducts = async () => {
            const res = await fetch('/api/suits')
            
            if (!res.ok) {
                console.error('Unable to fetch tasks')

                return
            } else {
                const resData = await res.json()
                setAllProducts(resData)
            }   
        }

        fetchAllProducts()
    }, [])

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
                    {allProducts && allProducts.map((product) => (
                        <div key={product._id}>
                            <p>{product.name}</p> 
                            <p>{product.quantity}</p>                  
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}