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
            <div className="checkout-delivery">
                <Link className="return-from-checkout" to="/products/all">Continue Shopping</Link>
                <div className="delivery-info">
                    Delivery info here
                </div>
                <Link to="">Proceed to Payment</Link>
            </div>
            <div className="checkout-items-container">
                <div className="checkout-items">
                    {checkoutItems && checkoutItems.map((item) => (
                    <div className="checkout-item" key={item._id}>
                        <div className="checkout-item-image">
                            image
                        </div>
                        <div className="checkout-item-name">
                            <p>{item.name}</p>
                            <p>size</p> 
                            <p>QTY</p>
                        </div>
                        <div className="checkout-item-remove">
                            <button onClick={() => removeFromCheckout(item.type, item.itemId)}>Remove from Cart</button>
                            <p>Price</p>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="checkout-total">
                    <div className="checkout-total-price">
                        <p>Shipping</p>
                        <p>$$$</p>
                    </div>
                    <div className="checkout-total-price">
                        <p>Total Price</p>
                        <p>$$$</p>
                    </div>
                </div>
            </div>
        </div>
    )
}