import { useState, useEffect } from 'react'

export default function Checkout() {
    const [ checkoutItems, setCheckoutItems ] = useState([])
    
    useEffect(() => {
        const fetchItemsInCart = async () => {
            const res = await fetch('/api/inCart')
            
            if (!res.ok) {
                console.error('Unable to fetch items')
    
                return
            } else {
                const resData = await res.json()
    
                setCheckoutItems(resData)
            } 
        }

        fetchItemsInCart()
    }, [])


    return (
        <div className="checkout-page">
            {checkoutItems && checkoutItems.map((item) => (
            <div key={item._id}>
                <p>{item.name}</p>
                <p>{item.quantity}</p>
            </div>
            ))}
        </div>
    )
}