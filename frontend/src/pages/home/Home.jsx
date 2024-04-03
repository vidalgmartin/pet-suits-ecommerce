import { useRef, useEffect, useContext } from 'react'
import { AppContext } from '../../App'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
    const { updateNavbar } = useContext(AppContext)

    const targetRef = useRef(null)

    const scrollToCollections = () => {
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const handleScroll = () => {
        if (window.scrollY > 30) {
            updateNavbar(true)
        } else {
            updateNavbar(false)
        }
    }

    window.addEventListener('scroll', handleScroll)

    useEffect(() => {
        updateNavbar(false)
    }, [])
    
    return (
        <div className="home-page">

            <section className="intro-section">
                <div className="intro-content">
                    <h2>Lorem ipsum dolor. ??</h2>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    <div>
                        <a className="intro-button" onClick={scrollToCollections}>Explore collections</a>
                        <Link className="intro-button"to="/products/all">
                            Shop All
                        </Link>
                    </div>
                </div>
            </section>

            <section className="about-section">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, ea tempore temporibus pariatur blanditiis quisquam tenetur ab, architecto quibusdam quam, sit alias? Perspiciatis nisi eaque eius non dolorem, excepturi natus!</p>
            </section>

            <section className="products-section" ref={targetRef} >
                <div className="products-content">
                    <p className="products-headline">Shop by category</p>
          
                    <div className="products-panels">
                        <Link className="panel cat-panel" to="/products/cat-suits">
                            <p>Cat suits</p>
                        </Link>
                        <Link className="panel dog-panel" to="/products/dog-suits">
                            <p>Dog suits</p>
                        </Link>
                        <Link className="panel accessories-panel" to="/products/accessories">
                            <p>Acessories</p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
