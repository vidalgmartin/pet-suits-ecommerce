import { useState, useEffect } from 'react'

export default function Cat() {
    const [ items, setItems ] =  useState([])

    useEffect(() => {
        const fetchCatItems = async () => {
            const res = await fetch('/api/suits/cat')
            
            if (!res.ok) {
                console.error('Unable to fetch items')

                return
            } else {
                const resData = await res.json()
                setItems(resData)
            }   
        }

        fetchCatItems()
    }, [])
     return (
        <div >
            {items && items.map((item) => (
                <div key={item._id}>
                    <p>{item.name}</p> 
                    <p>{item.quantity}</p>
                    <p>{item.type}</p>                    
                </div>
            ))}
        </div>
     )
}