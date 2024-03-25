import { useState, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import './Accounts.css'

export default function Admin() {
    const [ name, setName ] = useState('')
    const [ itemId, setItemId ] = useState('')
    const [ quantity, setQuantity ] = useState('')
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
        formData.append('quantity', quantity)
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
            setQuantity('')
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
            <form onSubmit={handleSubmit}>
                <label>
                    Image:
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
                    itemId:
                    <input 
                        type="text"
                        placeholder="Item id"
                        onChange={(e) => setItemId(e.target.value)}
                        value={itemId}
                    />
                </label>
                <label>
                    quantity:
                    <input 
                        type="number"
                        placeholder="Quantity"
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                    />
                </label>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value= "" disabled >Select an option</option>
                    <option value= "cat-suits">cat suit</option>
                    <option value= "dog-suits">dog suit</option>
                    <option value= "accessories">accessories</option>
                </select>
                <button>Submit</button>
            </form>
        </div>
     )
}