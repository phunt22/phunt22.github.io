import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ThemedPageHeader.css';

export default function ThemedPageHeader({ title, backTo = '/favorites', theme }) {
    return (
        <div className="themed-header" style={{ backgroundColor: theme.bg }}>
            <Link to={backTo}>
                <motion.button
                    className="themed-header__back"
                    style={{ color: theme.text }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </motion.button>
            </Link>
            <h1 className="themed-header__title" style={{ color: theme.text }}>
                {title}
            </h1>
        </div>
    );
}
