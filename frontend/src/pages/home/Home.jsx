import './Home.css'

export default function Home() {
    
    return (
        <div className="home-page">

            <section className="intro-section">
                <div className="intro-content">
                    <h2>Lorem ipsum dolor. ??</h2>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                    <div>
                        <button>Explore collections</button>
                        <button>Shop All</button>
                    </div>
                </div>
            </section>

            <section className="category-section">
                <div className="category-content">
                    <h1>Shop by category</h1>
                    <div className="category-panels">
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </div>
                </div>
            </section>

            <footer className="footer-links">
                <a>Github</a> <a>LinkedIn</a> by Martin Vidal Garibay
            </footer>

        </div>
    )
}
