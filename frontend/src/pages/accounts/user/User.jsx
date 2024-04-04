import { useEffect, useContext } from 'react'
import { AppContext } from '../../../App'

export default function User() {
    const { updateNavbar } = useContext(AppContext)

    useEffect(() => {
        updateNavbar(true)
    }, [updateNavbar])
    
    return (
        <div className="user-page">
            <h2>
                User Page
            </h2>
        </div>
    )
}