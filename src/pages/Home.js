import './Home.css';
import { Link } from 'react-router-dom';
import { socialLinks } from '../data/socialLinks';

function Home() {
    return (
        <div className="home">
            <div className="home__left">
                <img
                    src="/assets/landing_headshot.JPG"
                    alt="Will Hunt"
                    className="home__headshot"
                    draggable={false}
                />
            </div>
            <div className="home__right">
                <h1 className="home__name">Will Hunt</h1>
                <div className="home__blurb__container">
                    <p className="home__blurb">
                        I’m a recent UW Computer Science grad with experience across enterprise software, consumer apps, agent infra, and fundraising. 
                        {/* diverse set of experiences across enterprise software, consumer apps, and AI infra, as well as areas like fundraising.  */}
                    </p>
                    <p className="home__blurb">
                        I'm currently at arker.ai working on the future of virtual computers for agents, and assistant-coaching cross-country/track at Bishop 
                        Blanchet High School.           
                    </p>
                    <p className="home__blurb">
                        I enjoy running, sports, coffee, and (almost) anything outdoors!
                    </p>
                    <p className="home__blurb">
                        This website is a work in progress, mostly for fun. Enjoy!
                    </p>
                </div>
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
