import { useEffect, useContext } from 'react'
import { AppContext } from '../../App'

export default function Account() {
    const { updateNavbar } = useContext(AppContext)

    useEffect(() => {
        updateNavbar(true)
    }, [updateNavbar])
    
    return (
        <div className="account-page">
            <h2>
                Account Page
            </h2>
        </div>
    )
}