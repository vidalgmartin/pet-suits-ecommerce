import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Components.css'

export default function Cart({ toggleCartVisibility }) {
    const [ cartItems, setCartItems] = useState([])

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
            console.error('Failed to update task')

            return
        } else {
            console.log('update successfully')
        }

        fetchItemsInCart()
    }

    return (
        <div className="cart">
            <div className="cart-blur" onClick={() => toggleCartVisibility(false)}>
                Blurred section
            </div>
            <div className="cart-content">
            {cartItems && cartItems.map((item) => (
                <div key={item._id}>
                    <p>{item.name}</p>  
                    <button onClick={() => removeFromCart(item.type, item.itemId)}>remove from cart</button>           
                </div>
            ))}
            <Link to="/checkout">
                <button>Checkout</button>
            </Link>
            </div>
        </div>
    )
}