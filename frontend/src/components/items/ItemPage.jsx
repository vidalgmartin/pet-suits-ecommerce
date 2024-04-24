import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'
import '../Components.css'
import { backendUrl } from '../../backendUrl'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function ItemPage({ itemId  }) {
    const [ items, setItems ] = useState([])
    const [ itemSize, setItemSize ] = useState('')
    const { updateNavbar, toggleCartVisibility, fetchNumOfItemsInCart } = useContext(AppContext)
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchItems = async () => {
            const res = await fetch(`${backendUrl}/api/suits/:type/${itemId}`)

            if (!res.ok) {
                console.error('Unable to fetch item')

                return
            } else {
                const resData = await res.json()
                setItems(resData)
            }   
        }
        fetchItems()
        updateNavbar(true)
    }, [itemId, updateNavbar])

    const addToCart = async (type, itemId) => {
        if(!user) {
            alert('please log in to add items to your cart!')
            setItemSize('')
            return
        }

        if (itemSize === '') {
            alert('You must select a size')
            return
        }

        const updatedItem = items.find(item => item.itemId === itemId)
        if (updatedItem && updatedItem.quantityInCart < updatedItem.quantity) {
            await fetch(`${backendUrl}/api/inCart/${type}/${itemId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify({
                    name: updatedItem.name,
                    quantityInCart: updatedItem.quantityInCart + 1,
                    size: itemSize,
                    price: updatedItem.price,
                    mainImage: updatedItem.mainImage,
                })
            })

            fetchNumOfItemsInCart()
            toggleCartVisibility()
            setItemSize('')
        } else {
            alert('Out of Stock')
        }
    }

    return (
        <>
            {items && items.map((item) => (
                <div className="item-page" key={item._id}>

                    <div className="left-item-page-container">
                        <div className="item-page-main-image-container">
                            <img className="item-page-main-image" src={`/uploads/item-image/${item.mainImage}`} alt={item.name} />
                        </div>
                        <div className="item-page-other-images-container">
                            <img className="item-page-other-image" src={`/uploads/item-image/${item.otherImages[0]}`} alt={item.name} />
                            <img className="item-page-other-image" src={`/uploads/item-image/${item.otherImages[1]}`} alt={item.name} />
                            <img className="item-page-other-image" src={`/uploads/item-image/${item.otherImages[2]}`} alt={item.name} />
                            <img className="item-page-other-image" src={`/uploads/item-image/${item.otherImages[3]}`} alt={item.name} />
                        </div>
                    </div>

                    <div className="right-item-page-container">
                        <div className="item-page-details-container">
                            <Link className="item-page-back" to="/products/all"> Continue Shopping</Link>
                            <div className="item-page-details">
                                <h1 className="item-page-name">{item.name}</h1>
                                <p className="item-page-price">Price: $<span>{item.price}</span></p>
                                <p className="item-page-description">{item.description}</p>
                                <div className="item-page-sizes">
                                    <button className={`size-button ${itemSize === 'Small' ? 'selected' : ''}`} onClick={() => setItemSize('Small')}>Small (14 - 21)</button>
                                    <button className={`size-button ${itemSize === 'Medium' ? 'selected' : ''}`} onClick={() => setItemSize('Medium')}>Medium (20 - 27)</button>
                                    <button className={`size-button ${itemSize === 'Large' ? 'selected' : ''}`} onClick={() => setItemSize('Large')}>Large (26 - 33)</button>
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