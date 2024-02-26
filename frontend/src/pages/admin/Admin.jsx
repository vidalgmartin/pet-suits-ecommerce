import { useState } from 'react'
import './Admin.css'

export default function Admin() {
    const [ name, setName ] = useState('')
    const [ quantity, setQuantity ] = useState('')
    const [ type, setType ] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch('api/suits', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, quantity, type})
        })

        if(!res.ok) {
            console.error('Failed to create item')

            return 
        } else {
            setName('')
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
                Create a new item:
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
                    <option value= "cat-suit">cat suit</option>
                    <option value= "dog-suit">dog suit</option>
                    <option value= "acessories">acessories</option>
                </select>
                <button>Submit</button>
            </form>
        </div>
     )
}