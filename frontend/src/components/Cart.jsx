import './Components.css'

export default function Cart({ toggleVisibleCart }) {

    return (
        <div className="cart">
            <div className="cart-blur" onClick={() => toggleVisibleCart(false)}>
                Blurred section
            </div>
            <div className="cart-content">
                The cart is visible
            </div>
        </div>
    )
}