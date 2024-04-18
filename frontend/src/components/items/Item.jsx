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
    }, [itemUrl])

    return (
        <>
            {items && items.map((item) => (
                <Link className="item-container" to={`/products/${item.type}/${item.itemId}`} key={item._id}>
                    <div className="item-image-container">
                        <img className="item-image" src={`/uploads/item-image/${item.mainImage}`} alt={item.name} />  
                    </div>
                    <div className="item-info-container">
                        <div className="item-name">
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                        </div>
                        <p className="item-color">{item.color}</p>       
                    </div>
                </Link>
            ))}
        </>
    )
}