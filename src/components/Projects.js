// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';
import rentals from '../assets/rentalcar.png'
const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Rental Car</h3>
                    <img src={rentals} alt="Uniswap Swap Page" />
                    <p>This site was deployed on the polygon blockchain. I wanted to create a real life application. Even though this site is a work in progress it demonstrates the power of Web3 and the real life applications that could be put in place.
                    </p>

                    <a href="https://uniswap.org/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/fruitboxfred/car" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Compound</h3>
                    <img src={compound} alt="Compound Landing Page" />
                    <p>This site was deployed on the polygon blockchain. I wanted to create a real life application
                    </p>

                    <a href="https://compound.finance/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/compound-finance/compound-protocol" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Aave</h3>
                    <img src={aave} alt="Aave Landing Page" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis consectetur facere neque assumenda quasi aliquid,
                        perferendis ratione rerum dolorem.
                    </p>

                    <a href="https://aave.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;