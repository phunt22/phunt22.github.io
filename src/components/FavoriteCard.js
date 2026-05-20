import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './FavoriteCard.css';

const getBrightness = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000;
};

export function FavoriteGridCard({ data, onOpen }) {
    const [isHovered, setIsHovered] = useState(false);

    const isLight = getBrightness(data.bgColor) > 128;

    return (
        <motion.li
            layout
            layoutId={data.id}
            className="favorite-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onOpen(data.id)}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                layout: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.15 }
            }}
        >
            <div className="favorite-card__bg" style={{ backgroundColor: data.bgColor }} />

            <motion.img
                src={data.image}
                alt={data.title}
                className="favorite-card__image"
                animate={{ opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                draggable={false}
            />

            <motion.div
                className={`favorite-card__hover ${isLight ? 'favorite-card__hover--light' : 'favorite-card__hover--dark'}`}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
            >
                <h3 className="favorite-card__title">{data.title}</h3>
                <p className="favorite-card__author">{data.author}</p>
            </motion.div>
        </motion.li>
    );
}

function FavoriteContent({ data }) {
    return (
        <div className="favorite-modal__body">
            {data.description && (
                <p className="favorite-modal__description">{data.description}</p>
            )}
        </div>
    );
}

export function FavoriteModal({ data, onClose }) {
    const isLight = getBrightness(data.bgColor) > 128;
    const barText = isLight ? '#000000' : '#ffffff';
    const barTextSecondary = isLight ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)';

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <motion.aside
            className="favorite-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <motion.div
                className="favorite-modal__backdrop"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut", delay: 0.15 }}
            />

            <motion.div
                className="favorite-modal__content"
                exit={{ scale: 0.95 }}
            >
                <div className="favorite-modal__bar" style={{ backgroundColor: data.bgColor }}>
                    <div className="favorite-modal__heading">
                        <h2 className="favorite-modal__title" style={{ color: barText }}>
                            {data.title}
                        </h2>
                        <p className="favorite-modal__author" style={{ color: barTextSecondary }}>
                            {data.author}
                        </p>
                    </div>
                    <motion.button
                        className="favorite-modal__close"
                        style={{ color: barText }}
                        onClick={onClose}
                        whileHover={{ opacity: 1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </motion.button>
                </div>

                <FavoriteContent data={data} />
            </motion.div>
        </motion.aside>
    );
}
