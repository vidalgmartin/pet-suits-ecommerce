import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'
import './Accounts.css'

export default function Checkout() {
    const { updateNavbar, fetchNumOfItemsInCart } = useContext(AppContext)
    const [ items, setItems] = useState([])
    const [ checkoutItems, setCheckoutItems] = useState([])

    const fetchItems = async () => {
        const res = await fetch('/api/suits')        
        if (!res.ok) {
            console.error('Unable to fetch items')
            return
        } else {
            const resData = await res.json()
            setItems(resData)
        } 
    }

    const fetchItemsInCheckout = async () => {
        const res = await fetch('/api/inCart')        
        if (!res.ok) {
            console.error('Unable to fetch cart items')
            return
        } else {
            const resData = await res.json()
            setCheckoutItems(resData)
        } 
    }

    const totalPrice = checkoutItems.reduce((total, item) => {
        return total + (item.price * item.quantity)
    }, 0)

    const removeFromCheckout = async (id, itemId, quantity) => {
        const res = await fetch(`/api/inCart/${id}`, {
            method: 'DELETE'
        })
        if(!res.ok) {
            console.error('Failed to delete item')
            return
        }

        const itemQuantity = items.find(item => item.itemId === itemId)
        await fetch(`/api/suits/${itemQuantity.type}/${itemQuantity.itemId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                quantityInCart: itemQuantity.quantityInCart - quantity
            })
        })

        console.log('Deleted successfully')
        fetchItems()
        fetchItemsInCheckout()
        fetchNumOfItemsInCart()
    }

    useEffect(() => {
        updateNavbar(true)
        fetchItems()
        fetchItemsInCheckout()
    }, [updateNavbar])
 
    return (
        <div className="checkout-page">
            <div className="checkout-delivery">
                <Link className="checkout-return" to="/products/all">Continue Shopping</Link>
                <div className="delivery-info">
                    Delivery info here
                </div>
                <Link to="" className="delivery-payment">Proceed to Payment</Link>
            </div>
            <div className="checkout-items-container">
                <div className="checkout-items">
                    {checkoutItems && checkoutItems.map((item) => (
                        <div className="checkout-item" key={item._id}>
                            <div className="checkout-item-image-container">
                                <img className="checkout-item-image" src={`../../../uploads/item-image/${item.image}`} alt={item.name} />
                            </div>

                            <div className="checkout-item-details-container">
                                <div className="checkout-item-details">
                                    <Link to={`/products/${item.type}/${item.itemId}`} className="checkout-item-name">{item.name}</Link>
                                    <button className="checkout-item-remove-btn" onClick={() => removeFromCheckout(item._id, item.itemId, item.quantity)}>X</button> 
                                </div>

                                <div className="checkout-item-details">
                                    <p className="checkout-item-details-size">{item.size}</p>
                                </div>

                                <div className="checkout-item-details">
                                    <p className="checkout-item-details-qty">QTY: {item.quantity}</p>
                                    <p className="checkout-item-price">${item.price * item.quantity}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="checkout-total">
                    <div className="checkout-price">
                        <p>Shipping:</p>
                        <p className="checkout-total-price">$0 USD</p>
                    </div>
                    <div className="checkout-price">
                        <p>Total Price:</p>
                        <p className="checkout-total-price">${totalPrice} USD</p>
                    </div>
                </div>
            </div>
        </div>
    )
}