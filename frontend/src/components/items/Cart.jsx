import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'
import '../Components.css'

export default function Cart() {
    const { toggleCartVisibility, fetchNumOfItemsInCart } = useContext(AppContext)
    const [ items, setItems] = useState([])
    const [ cartItems, setCartItems] = useState([])

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

    const fetchItemsInCart = async () => {
        const res = await fetch('/api/inCart')        
        if (!res.ok) {
            console.error('Unable to fetch cart items')
            return
        } else {
            const resData = await res.json()
            setCartItems(resData)
        } 
    }

    useEffect(() => {
        fetchItems()
        fetchItemsInCart()
    }, [])

    const removeFromCart = async (id, itemId, quantity) => {
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
        fetchItemsInCart()
        fetchNumOfItemsInCart()
    }

    return (
        <div className="cart">
            <div className="cart-blur" onClick={toggleCartVisibility}></div>

            <div className="cart-content-container">
                <div className="cart-item-container">
                    {cartItems && cartItems.map((item) => (
                        <div className="cart-item" key={item._id}>
                            <div className="cart-item-image-container">
                                <img className="cart-item-image" src={`../../../uploads/item-image/${item.image}`} alt={item.name} />
                            </div>

                            <div className="cart-item-details-container">
                                <div className="cart-item-details">
                                    <h3 className="cart-item-name">{item.name}</h3> 
                                    <button className="cart-remove-item" onClick={() => removeFromCart(item._id, item.itemId, item.quantity)}>X</button>
                                </div>

                                <div className="cart-item-details">
                                    <p className="cart-item-size">{item.size}</p>
                                </div>

                                <div className="cart-item-details">
                                    <p className="cart-item-qty">QTY: {item.quantity}</p>
                                    <p className="cart-item-price">${item.price * item.quantity}</p>  
                                </div>
                            </div>        
                        </div>
                    ))}
                </div>
                <Link className="cart-checkout" to="/checkout" onClick={toggleCartVisibility}>Checkout</Link>
            </div>
        </div>
    )
} 