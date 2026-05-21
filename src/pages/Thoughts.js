import ThemedPageHeader from '../components/ThemedPageHeader';
import './Thoughts.css';

const THEME = { bg: '#f0f0f0', text: '#1a1a1a' };

function Thoughts() {
    return (
        <>
            <ThemedPageHeader title="Thoughts" backTo="/" theme={THEME} />
            <div className="thoughts">
                <p className="thoughts__body">Coming soon.</p>
            </div>
        </>
    );
}

export default Thoughts;
