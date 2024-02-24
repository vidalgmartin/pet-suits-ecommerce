import { useState, useEffect } from 'react'

export default function Acessories() {
    const [ items, setItems ] =  useState([])

    useEffect(() => {
        const fetchAcessoryItems = async () => {
            const res = await fetch('/api/suits/acessories')
            
            if (!res.ok) {
                console.error('Unable to fetch items')

                return
            } else {
                const resData = await res.json()
                setItems(resData)
            }   
        }

        fetchAcessoryItems()
    }, [])
     return (
        <div>
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