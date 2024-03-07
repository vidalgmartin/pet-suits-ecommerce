import { useState, useEffect, useContext } from 'react'
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

    useEffect(() => {
        fetchItemsInCart()
        handleNavbarUpdate()
    }, [])
 
    return (
        <div className="checkout-page">
            HI
            {checkoutItems && checkoutItems.map((item) => (
            <div key={item._id}>
                <p>{item.name}</p>
                <p>{item.quantity}</p>
            </div>
            ))}
        </div>
    )
}