import { useState, useEffect } from 'react'
import '../Components.css'

export default function ItemPage({ type, itemId }) {
    const [ items, setItems ] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            const res = await fetch(`/api/suits/${type}/${itemId}`)
            
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
                <div key={item._id}>
                    <p>{item.name}</p>
                    <p>{item.quantity}</p>                 
                </div>
            ))}
        </>
    )
}