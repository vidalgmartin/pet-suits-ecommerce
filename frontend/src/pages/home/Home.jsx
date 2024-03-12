import { useRef } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
    const targetRef = useRef(null)

    const scrollToCollections = () => {
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }
    
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
                    <div className="products-headline">
                        <h3>Shop by category</h3>
                    </div>
                    <div className="products-panels">
                        <Link className="panel" to="/products/cat-suits">
                            Cat suits
                        </Link>
                        <Link className="panel" to="/products/dog-suits">
                            Dog suits
                        </Link>
                        <Link className="panel" to="/products/accessories">
                            Acessories
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
