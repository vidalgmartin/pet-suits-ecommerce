import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'
import '../Components.css'

export default function Cart() {
    const [ cartItems, setCartItems] = useState([])

    const { toggleCartVisibility } = useContext(AppContext)

    const fetchItemsInCart = async () => {
        const res = await fetch('/api/inCart')
        
        if (!res.ok) {
            console.error('Unable to fetch items')

            return
        } else {
            const resData = await res.json()

            setCartItems(resData)
        } 
    }

    useEffect(() => {
        fetchItemsInCart()
    }, [])

    const removeFromCart = async (type, itemId) => {
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

    return (
        <div className="cart">

            <div className="cart-blur" onClick={toggleCartVisibility}>
                Blur
            </div>

            <div className="cart-content-container">
                <div className="cart-item-container">
                    {cartItems && cartItems.map((item) => (
                        <div className="cart-item" key={item._id}>
                            <div className="cart-item-image">
                                image
                            </div>

                            <div className="cart-item-details">
                                <div className="cart-item-name">
                                    <h3>{item.name}</h3> 
                                    <button className="cart-remove-item" onClick={() => removeFromCart(item.type, item.itemId)}>remove</button>
                                </div>

                                <p className="cart-item-size">Size</p>

                                <div className="cart-item-price">
                                    <p>QTY</p>
                                    <p>Price</p>  
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