import './Home.css';
import { Link } from 'react-router-dom';
import { socialLinks } from '../data/socialLinks';

function Home() {
    return (
        <div className="home">
            <div className="home__left">
                <div className="home__headshot" />
            </div>
            <div className="home__right">
                <h1 className="home__name">Will Hunt</h1>
                <p className="home__blurb">
                    Short blurb about who you are and what you're working on. Keep it to a sentence or two so the page feels light. 
                </p>
                <nav className="home__links">
                    <Link to="/featured">Featured</Link>
                    <Link to="/favorites">Favorites</Link>
                    <Link to="/thoughts">Thoughts</Link>
                    <Link to="/projects">Projects</Link>
                </nav>
                <div className="home__socials">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`home__social home__social--${social.name}`}
                            aria-label={social.name}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
