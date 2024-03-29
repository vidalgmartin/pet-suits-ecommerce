import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'
import '../Components.css'

export default function ItemPage({ itemId  }) {
    const [ items, setItems ] = useState([])
    const { updateNavbar, toggleCartVisibility, fetchNumOfItemsInCart } = useContext(AppContext)

    useEffect(() => {
        updateNavbar(true)

        const fetchItems = async () => {
            const res = await fetch(`/api/suits/:type/${itemId}`)

            if (!res.ok) {
                console.error('Unable to fetch item')

                return
            } else {
                const resData = await res.json()
                setItems(resData)
            }   
        }
        fetchItems()
    }, [itemId, updateNavbar])

    const addToCart = async (type, itemId) => {
        const updatedItem = items.find(item => item.itemId === itemId)
        if (updatedItem && updatedItem.quantityInCart < updatedItem.quantity) {
            await fetch(`/api/suits/${type}/${itemId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    inCart: true,
                    quantityInCart: updatedItem.quantityInCart + 1,
                })
            })
            setItems([...items])
            console.log('Item added to cart')
            fetchNumOfItemsInCart()
            toggleCartVisibility()
        } else {
            console.log('Out of Stock')
        }
    }

    return (
        <>
            {items && items.map((item) => (
                <div className="item-page" key={item._id}>

                    <div className="item-page-container left">
                        <div className="item-page-images-container">
                            <div className="item-page-main-image-container">
                                <img className="item-page-main-image" src={`../../../uploads/item-image/${item.image}`} alt={item.name} />
                            </div>
                            <div className="item-page-other-images-container">
                                <div className="item-page-other-image">Othe image</div>
                                <div className="item-page-other-image">Othe image</div>
                                <div className="item-page-other-image">Othe image</div>
                            </div>
                        </div>
                    </div>

                    <div className="item-page-container right">
                        <div className="item-page-details-container">
                            <Link className="item-page-back" to="/products/all">Continue Shopping</Link>
                            <div className="item-page-details">
                                <h1 className="item-page-name">{item.name}</h1>
                                <p className="item-page-price">Price: ${item.price}</p>
                                <p className="item-page-description">{item.description}</p>
                                <div className="item-page-sizes">
                                    <button className="size-button">Small</button>
                                    <button className="size-button">Medium</button>
                                    <button className="size-button">Large</button>
                                </div>
                                <button className="item-page-add" onClick={() => addToCart(item.type, item.itemId)}>Add to cart</button>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </>
    )
}