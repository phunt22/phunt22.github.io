import { motion } from 'framer-motion';
import './FavoriteCard.css';

const getBrightness = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000;
};

export function FavoriteGridCard({ data, onOpen, hoverEnabled = true, isOpen = false }) {
    const isLight = getBrightness(data.bgColor) > 128;
    const cardClassName = [
        'favorite-card',
        hoverEnabled && 'favorite-card--hoverable',
        isOpen && 'favorite-card--open',
    ].filter(Boolean).join(' ');
    const imageClassName = `favorite-card__image${data.contain ? ' favorite-card__image--contain' : ''}`;
    const overlayClassName = `favorite-card__hover favorite-card__hover--${isLight ? 'light' : 'dark'}`;

    return (
        <motion.li
            layout
            layoutId={data.id}
            className={cardClassName}
            onClick={() => onOpen(data.id)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                layout: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.15 }
            }}
        >
            <div className="favorite-card__bg" style={{ backgroundColor: data.bgColor }} />

            <img
                src={data.image}
                alt={data.title}
                className={imageClassName}
                draggable={false}
            />

            <div className={overlayClassName}>
                <h3 className="favorite-card__title">{data.title}</h3>
                <p className="favorite-card__author">{data.author}</p>
            </div>
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
    const selectionText = isLight ? '#000000' : '#ffffff';
    const modalId = `fav-modal-${data.id}`;

    return (
        <motion.aside
            className="favorite-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, pointerEvents: 'none' }}
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
                id={modalId}
                className="favorite-modal__content"
                exit={{ scale: 0.95 }}
            >
                <style>{`#${modalId} ::selection { background-color: ${data.bgColor}; color: ${selectionText}; }`}</style>

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
