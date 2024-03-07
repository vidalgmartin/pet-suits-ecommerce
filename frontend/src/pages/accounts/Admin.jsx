import { useState, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import './Accounts.css'

export default function Admin() {
    const [ name, setName ] = useState('')
    const [ itemId, setItemId ] = useState('')
    const [ quantity, setQuantity ] = useState('')
    const [ type, setType ] = useState('')

    const { updateNavbar } = useContext(AppContext)

    useEffect(() => {
        const handleNavbarUpdate = () => {
            updateNavbar(true)
        }

        handleNavbarUpdate()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch('api/suits', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, itemId, quantity, type})
        })

        if(!res.ok) {
            console.error('Failed to create item')

            return 
        } else {
            setName('')
            setItemId('')
            setQuantity('')
            setType('')

            const json = await res.json()
            console.log('Item created successfully', json)
        }
    }

     return (
        <div className="admin-page">
            Hello this is the admin page
            <form onSubmit={handleSubmit}>
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