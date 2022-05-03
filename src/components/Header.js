// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Al Bradicich" />

            <div className='header__content'>
                <h1>Hi, I'm Al</h1>
                <p> Jnr Web3 Developer</p>
                <a href="mailto:allanbradicich@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;