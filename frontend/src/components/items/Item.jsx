import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Components.css'

export default function Item({ itemUrl }) {
    const [ items, setItems ] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            const res = await fetch(itemUrl)
            
            if (!res.ok) {
                console.error('Unable to fetch items')

                return
            } else {
                const resData = await res.json()
                setItems(resData)
            }   
        }

        fetchItems()
    }, [])

    return (
        <>
            {items && items.map((item) => (
                <Link to={`/products/${item.type}/${item.itemId}`} key={item._id}>
                    <div className="item" >
                        <p>{item.name}</p>
                        <p>{item.quantity}</p>
                        <p>{item.type}</p>                   
                    </div>
                </Link>
            ))}
        </>
    )
}