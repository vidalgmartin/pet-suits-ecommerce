import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'
import './Accounts.css'

export default function Checkout() {
    const [ checkoutItems, setCheckoutItems ] = useState([])

    const { updateNavbar } = useContext(AppContext)
    
    const handleNavbarUpdate = () => {
        updateNavbar(true)
    }

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

    const removeFromCheckout = async (type, itemId) => {
        const res = await fetch(`/api/suits/${type}/${itemId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                inCart: false
            })
        })
 
        if(!res.ok) {
            console.error('Failed to update item')
 
            return
        } else {
            console.log('update successfully')
        }

        fetchItemsInCart()
    }

    useEffect(() => {
        fetchItemsInCart()
        handleNavbarUpdate()
    }, [])
 
    return (
        <div className="checkout-page">
            <Link to="/products/all">Continue Shopping</Link>
            {checkoutItems && checkoutItems.map((item) => (
            <div key={item._id}>
                <p>{item.name}</p>
                <p>{item.quantity}</p>
                <button onClick={() => removeFromCheckout(item.type, item.itemId)}>Remove from Cart</button>
            </div>
            ))}
        </div>
    )
}