import { useState, useEffect } from 'react'

export default function Dog() {
    const [ items, setItems ] =  useState([])

    useEffect(() => {
        const fetchDogItems = async () => {
            const res = await fetch('/api/suits/dog')
            
            if (!res.ok) {
                console.error('Unable to fetch items')

                return
            } else {
                const resData = await res.json()
                setItems(resData)
            }   
        }

        fetchDogItems()
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