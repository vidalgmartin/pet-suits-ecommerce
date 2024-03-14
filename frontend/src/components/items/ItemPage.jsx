import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'
import '../Components.css'

export default function ItemPage({ itemId  }) {
    const [ items, setItems ] = useState([])

    const { updateNavbar, toggleCartVisibility } = useContext(AppContext)

    useEffect(() => {
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
       
        updateNavbar(true)
    }, [])

    const addToCart = async (type, itemId) => {
        const res = await fetch(`/api/suits/${type}/${itemId}`, {
           method: 'PATCH',
           headers: {
            'Content-Type': 'application/json'
           },
           body: JSON.stringify({
            inCart: true
           })
        })

        if(!res.ok) {
            console.error('Failed to update task')

            return
        } else {
            console.log('update successfully')
            toggleCartVisibility()
        }
    }

    return (
        <>
            {items && items.map((item) => (
                <div className="item-page" key={item._id}>

                    <div className="item-page-container">
                        <div className="item-page-images">
                            <div className="item-page-main-image">Main Image</div>
                            <div className="item-page-other-images-container">
                                <div className="item-page-other-image">Othe image</div>
                                <div className="item-page-other-image">Othe image</div>
                                <div className="item-page-other-image">Othe image</div>
                            </div>
                        </div>
                    </div>

                    <div className="item-page-container">
                        <div className="item-page-details">
                        <Link className="" to="/products/all">Continue Shopping</Link>
                            <h2>{item.name}</h2>
                            <p>Price</p>
                            <p>Description</p>
                            <div>
                                <button>Size 1</button>
                                <button>Size 2</button>
                            </div>
                            <button onClick={() => addToCart(item.type, item.itemId)}>Add to cart</button>
                        </div>
                    </div>

                </div>
            ))}
        </>
    )
}