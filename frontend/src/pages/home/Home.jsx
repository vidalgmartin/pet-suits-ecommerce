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

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                updateNavbar(true)
            } else {
                updateNavbar(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
    }, [updateNavbar])
    
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

            <section className="products-section" ref={targetRef} >
                <div className="products-content">
                    <h3 className="products-headline">Shop by category</h3>
          
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

            <footer>
                <div className="footer-links">
                    <a>Github</a>
                    <a>LinkedIn</a>
                    <a>Portfolio</a>
                </div>
            </footer>

        </div>
    )
}
