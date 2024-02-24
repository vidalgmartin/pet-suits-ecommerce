import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

export default function Products() {
    const [ items, setItems ] = useState([])

    useEffect(() => {
        const fetchAllItems = async () => {
            const res = await fetch('/api/suits')
            
            if (!res.ok) {
                console.error('Unable to fetch items')

                return
            } else {
                const resData = await res.json()
                setItems(resData)
            }   
        }

        fetchAllItems()
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
                    {items && items.map((item) => (
                        <div key={item._id}>
                            <p>{item.name}</p> 
                            <p>{item.quantity}</p>
                            <p>{item.type}</p>                   
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}