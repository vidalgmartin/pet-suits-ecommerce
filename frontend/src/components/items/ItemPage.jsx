import { useState, useEffect } from 'react'
import '../Components.css'

export default function ItemPage({ itemId }) {
    const [ items, setItems ] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            const res = await fetch(`/api/suits/:type/${itemId}`)
            
            if (!res.ok) {
                console.error('Unable to fetch item')

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
                <div className="item-page" key={item._id}>
                    <div className="item-page-container">
                        <div>
                            IMAGES
                        </div>
                    </div>

                    <div className="item-page-container">
                        <div className="item-page-details">
                            <h2>{item.name}</h2>
                            <p>Price</p>
                            <p>Description</p>
                            <div>
                                <button>Size 1</button>
                                <button>Size 2</button>
                            </div>
                            <button>Add to cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}