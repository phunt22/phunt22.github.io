import BackLink from '../components/BackLink';
import './Thoughts.css';

function Thoughts() {
    return (
        <>
            <div className="page-top">
                <BackLink />
            </div>
            <div className="thoughts">
                <h1 className="thoughts__title">Thoughts</h1>
                <p className="thoughts__body">Coming soon.</p>
            </div>
        </>
    );
}

export default Thoughts;
