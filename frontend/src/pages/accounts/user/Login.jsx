import { useState, useContext, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AppContext } from '../../../App'
import { useAuthContext } from '../../../hooks/useAuthContext'

export default function Login() {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(null)
    const { updateNavbar, fetchNumOfItemsInCart } = useContext(AppContext)
    const { dispatch } = useAuthContext()
    const navigate = useNavigate()

    useEffect(() => {
        updateNavbar(true)
    }, [updateNavbar])

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const res = await fetch('/api/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password })
        })
        const json = await res.json()

        if(!res.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if(res.ok) {
            // save user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update the auth context
            dispatch({type: 'LOGIN', payload: json})
            setIsLoading(false)
            setEmail('')
            setPassword('')
            fetchNumOfItemsInCart()
            navigate('/user')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <div className="login-and-signup-page">
            <form className="login-and-signup-form" onSubmit={handleSubmit}>
                <div className="login-and-signup-form-links">
                    <p>Login</p>
                    <Link to="/signup">Register</Link>
                </div>

                <label>Email:</label>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <label>Password:</label>
                <input 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />

                <button disabled={isLoading}>Login</button>
                {error && <p className="login-and-signup-page-error">{error}</p>}
            </form>
        </div>
    )
}