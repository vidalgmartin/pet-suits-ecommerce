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
                    <h2>Unleash Elegance</h2>
                    <h3>Explore Our Lavish Collection for Paws and Tails!</h3>
                    <div>
                        <a className="intro-button" onClick={scrollToCollections}>Explore collections</a>
                        <Link className="intro-button"to="/products/all">
                            Shop All
                        </Link>
                    </div>
                </div>
            </section>

            <section className="about-section">
                <p>At Paws & Tails Suits, we understand the discerning tastes of our feline and canine clientele. Our opulent collection of suits and accessories is tailored to elevate your style to new heights. From sleek tuxedos to elegant bowtie collars, each piece is designed with the utmost care and attention to detail, ensuring your fur exudes sophistication at every occasion. </p>
            </section>

            <section className="products-section" ref={targetRef} >
                <div className="products-content">
                    <p className="products-headline">Shop by category</p>
          
                    <div className="products-panels">
                        <Link className="panel cat-panel" to="/products/cat-suits">
                            <p>Feline Finesse</p>
                        </Link>
                        <Link className="panel dog-panel" to="/products/dog-suits">
                            <p>Doggy Dapper</p>
                        </Link>
                        <Link className="panel accessories-panel" to="/products/accessories">
                            <p>Accessories</p>
                        </Link>
                    </div>
                </div>
            </section>
            
        </div>
    )
}
