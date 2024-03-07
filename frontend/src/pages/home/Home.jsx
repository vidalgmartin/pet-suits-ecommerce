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
                        <button onClick={scrollToCollections}>Explore collections</button>
                        <Link to="/products/all">
                            <button>
                                Shop All
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="products-section" ref={targetRef} >
                <div className="products-content">
                    <h1>Shop by category</h1>
                    <div className="products-panels">
                        <Link to="/products/cat-suits">
                            Cat suits
                        </Link>
                        <Link to="/products/dog-suits">
                            Dog suits
                        </Link>
                        <Link to="/products/accessories">
                            Acessories
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="footer-links">
                <a>Github</a> <a>LinkedIn</a> by Martin Vidal Garibay
            </footer>

        </div>
    )
}
