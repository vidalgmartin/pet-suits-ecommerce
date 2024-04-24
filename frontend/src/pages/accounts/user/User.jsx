import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../App'
import { useAuthContext } from '../../../hooks/useAuthContext'

export default function User() {
    const { updateNavbar, setNumOfItemsInCart } = useContext(AppContext)
    const { dispatch, user } = useAuthContext()
    const navigate = useNavigate()

    const logout = () => {
        //remove user from storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({ type: 'LOGOUT' })

        setNumOfItemsInCart([])
        navigate('/login')
    }

    useEffect(() => {
        updateNavbar(true)
    }, [updateNavbar])

    return (
        <div className="user-page">
            <div className="user-details-container">
                {user ? (
                    <p>{user.email}</p>
                ) : (
                    <p>User page</p>
                )}
                <button onClick={logout}>Sign Out</button>
            </div>
        </div>
    )
}