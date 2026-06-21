import { Link } from 'react-router-dom';
import './BackLink.css';

export default function BackLink({ to = '/', label = 'Back to home' }) {
    return (
        <Link to={to} className="back-link" aria-label={label}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </Link>
    );
}
