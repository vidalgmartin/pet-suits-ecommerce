import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'
import '../Components.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { backendUrl } from '../../backendUrl'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function Cart() {
    const { toggleCartVisibility, fetchNumOfItemsInCart } = useContext(AppContext)
    const [ items, setItems] = useState([])
    const [ cartItems, setCartItems] = useState([])
    const { user } = useAuthContext()

    const fetchItems = async () => {
        const res = await fetch(`${backendUrl}/api/suits`)        
        if (!res.ok) {
            console.error('Unable to fetch items')
            return
        } else {
            const resData = await res.json()
            setItems(resData)
        } 
    }

    const fetchItemsInCart = async () => {
        if(!user) {
            console.log('please log in')
            return
        }
        
        const res = await fetch(`${backendUrl}/api/inCart`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        if (!res.ok) {
            console.error('Unable to fetch cart items')
            return
        } else {
            const resData = await res.json()
            setCartItems(resData)
        } 
    }

    const removeFromCart = async (id, itemId, quantity) => {
        const res = await fetch(`${backendUrl}/api/inCart/${id}`, {
            method: 'DELETE'
        })
        if(!res.ok) {
            console.error('Failed to delete item')
            return
        }

        const itemQuantity = items.find(item => item.itemId === itemId)
        await fetch(`${backendUrl}/api/suits/${itemQuantity._id}`, {
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

    const decreaseQuantity = async (id, itemId) => {
        const itemQuantity = items.find(item => item.itemId === itemId)
        const cartItemQuantity = cartItems.find(item => item._id === id)

        if (cartItemQuantity && cartItemQuantity.quantity === 1) {
            removeFromCart(id, itemId, cartItemQuantity.quantity )
            return
        }

        const res = await fetch(`${backendUrl}/api/inCart/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                quantity: cartItemQuantity.quantity - 1
            })
        })
        if (!res.ok) {
            console.error('Unable to update cart item')
            return
        } else {
            await fetch(`${backendUrl}/api/suits/${itemQuantity._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    quantityInCart: itemQuantity.quantityInCart - 1
                })
            })
        }
        fetchItems()
        fetchItemsInCart()
    }

    const increaseQuantity = async (id, itemId) => {
        const itemQuantity = items.find(item => item.itemId === itemId)
        const cartItemQuantity = cartItems.find(item => item._id === id)

        if (itemQuantity && itemQuantity.quantityInCart < itemQuantity.quantity) {
            const res = await fetch(`${backendUrl}/api/inCart/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    quantity: cartItemQuantity.quantity + 1
                })
            })
            if (!res.ok) {
                console.error('Unable to update cart item')
                return
            } else {
                await fetch(`${backendUrl}/api/suits/${itemQuantity._id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        quantityInCart: itemQuantity.quantityInCart + 1
                    })
                })
            }
        } else {
            alert('Out of stock')
        }
        fetchItems()
        fetchItemsInCart()
    }

    useEffect(() => {
        fetchItems()
        fetchItemsInCart()
    }, [user])

    return (
        <div className="cart">
            <div className="cart-blur" onClick={toggleCartVisibility}></div>

            <div className="cart-content-container">
            <a className="cart-return-link" onClick={toggleCartVisibility}>Return</a>
                <div className="cart-item-container">
                    {cartItems && cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div className="cart-item" key={item._id}>
                                <div className="cart-item-image-container">
                                    <img className="cart-item-image" src={`/uploads/item-image/${item.mainImage}`} alt={item.name} />
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
                                        <div className="cart-item-qty">
                                            <p>QTY:</p>
                                            <FontAwesomeIcon icon={faMinus} className="cart-item-qty-btn" onClick={() => decreaseQuantity(item._id, item.itemId)} /> 
                                            <p className="cart-item-qty-number">{item.quantity}</p>
                                            <FontAwesomeIcon icon={faPlus} className="cart-item-qty-btn" onClick={() => increaseQuantity(item._id, item.itemId)} />
                                        </div>
                                        <p className="cart-item-price">${item.price * item.quantity}</p>  
                                    </div>
                                </div>        
                            </div>
                        ))
                    ) : (
                        <p className="empty-cart">Fashionably bare... Suit up!</p>
                    )}
                </div>
                <Link className="cart-checkout" to="/checkout" onClick={toggleCartVisibility}>Checkout</Link>
            </div>
        </div>
    )
} 