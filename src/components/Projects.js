// Import Assets
import ukraine from '../assets/ukraine.png';
import metaverse from '../assets/metaverse.png';
import rentals from '../assets/rentalcar.png'
const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Rental Car</h3>
                    <img src={rentals} alt="Rental Car picture" />
                    <p>This site was deployed on the polygon blockchain. I wanted to create a real life application to demonstrates the power of Web3 and the real life applications that could be put in place.
                        <p>Currently in progress....</p>
                    </p>

                    <a href="https://twilight-lab-9722.on.fleek.co/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/fruitboxfred/car" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>NFT Collection</h3>
                    <img src={ukraine} alt="NFT Picture" />
                    <p>This NFT collection was created and directly uploaded to Opensea.
                        <p> All  proceeds from the sales will go directly to a charity supporting the people of Ukraine.</p>
                    </p>
                    <p></p>

                    <a href="https://opensea.io/collections" target="_blank" className="button">Site</a>
                    <a href="" target="_blank" className="button">N/A</a>
                  
                </div>

                <div className="projects__card">
                    <h3>POKELAND Metaverse</h3>
                    <img src={metaverse} alt="Metaland picture" />
                    <p> I'm a huge Pokemon fan I wanted to create a Metaverse allowing people to purchase land lots
                        this site will have a map, animations and enable the connection to NFT's. 
                    <p>This site is in the early devlopment stage and has yet to be uploaded</p>
                    </p>

                    <a href="" target="_blank" className="button">N/A</a>
                    <a href="" target="_blank" className="button">N/A</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;