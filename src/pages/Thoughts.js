import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import ThemedPageHeader from '../components/ThemedPageHeader';
import { thoughts } from '../data/thoughts';
import './Thoughts.css';

const THEME = { bg: '#f0f0f0', text: '#1a1a1a' };

function Thoughts() {
    return (
        <>
            <ThemedPageHeader title="thoughts" backTo="/" theme={THEME} />
            <AnimatedPage>
                <div className="thoughts">
                    <p className="thoughts__intro">
                       Also coming soon. Promise that some stuff is in the works
                    </p>

                    <ul className="thoughts__list">
                        {thoughts.map((thought) => (
                            <li key={thought.slug} className="thoughts__item">
                                <Link to={`/thoughts/${thought.slug}`} className="thoughts__card">
                                    <h2 className="thoughts__title">{thought.title}</h2>
                                    <p className="thoughts__blurb">{thought.blurb}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </AnimatedPage>
        </>
    );
}

export default Thoughts;
