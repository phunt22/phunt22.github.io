import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ThemedPageHeader.css';

const NAV_PAGES = [
    { to: '/projects', label: 'projects', match: '/projects' },
    { to: '/favorites', label: 'favorites', match: '/favorites' },
    { to: '/thoughts', label: 'thoughts', match: '/thoughts' },
];

export default function ThemedPageHeader({ title, backTo = '/favorites', theme, children }) {
    const { pathname } = useLocation();
    const otherPages = NAV_PAGES.filter((page) => !pathname.startsWith(page.match));

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
            <div className="themed-header__right">
                {children && <div className="themed-header__extra">{children}</div>}
                {otherPages.length > 0 && (
                    <nav className="themed-header__nav" style={{ color: theme.text }}>
                        {otherPages.map((page) => (
                            <Link key={page.to} to={page.to} className="themed-header__nav-link">
                                {page.label}
                            </Link>
                        ))}
                    </nav>
                )}
            </div>
        </div>
    );
}
