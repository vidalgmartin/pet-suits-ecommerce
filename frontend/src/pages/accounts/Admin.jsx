import { useState, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import './Accounts.css'

export default function Admin() {
    const [ name, setName ] = useState('')
    const [ itemId, setItemId ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ quantity, setQuantity ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ type, setType ] = useState('')
    const [ image, setImage ] = useState(null)

    const { updateNavbar } = useContext(AppContext)

    useEffect(() => {
        updateNavbar(true)
    }, [updateNavbar])

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        const formData = new FormData()
        formData.append('name', name)
        formData.append('itemId', itemId)
        formData.append('description', description)
        formData.append('quantity', quantity)
        formData.append('price', price)
        formData.append('type', type)
        formData.append('image', image)
    
        try {
            const res = await fetch('api/suits', {
                method: 'POST',
                body: formData
            })
    
            if (!res.ok) {
                console.error('Failed to create item')
                
                return
            }
            setName('')
            setItemId('')
            setDescription('')
            setQuantity('')
            setPrice('')
            setType('')
            setImage(null)
    
            const json = await res.json()
            console.log('Item created successfully', json)
        } catch (error) {
            console.error('Error creating item:', error)
        }
    }

    const handleImageChange = (e) => {
        setImage(e.target.files[0])
    }

     return (
        <div className="admin-page">
            <form className="admin-form" onSubmit={handleSubmit}>
                <label>
                    Image Display:
                    <input 
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </label>
                <label>
                    Name:
                    <input 
                        type="text"
                        placeholder="Item name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </label>
                <label>
                    ItemId:
                    <input 
                        type="text"
                        placeholder="Item id"
                        onChange={(e) => setItemId(e.target.value)}
                        value={itemId}
                    />
                </label>
                <label>
                    Item Description:
                    <textarea 
                        className="description-input"
                        type="text"
                        placeholder="Description..."
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </label>
                <label>
                    Quantity:
                    <input 
                        type="number"
                        placeholder="Quantity"
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                    />
                </label>
                <label>
                    Price Per Unit:
                    <input 
                        type="number"
                        placeholder="Price"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                    />
                </label>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value= "" disabled >Select the type of Item</option>
                    <option value= "cat-suits">cat suit</option>
                    <option value= "dog-suits">dog suit</option>
                    <option value= "accessories">accessories</option>
                </select>
                <button>Submit</button>
            </form>
        </div>
     )
}