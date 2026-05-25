import { motion } from 'framer-motion';

const getBrightness = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000;
};

export function FavoriteGridCard({ data, onOpen, hoverEnabled = true, isOpen = false }) {
    const textColor = getBrightness(data.bgColor) > 128 ? 'text-black' : 'text-white';
    const textColorSecondary = getBrightness(data.bgColor) > 128 ? 'text-black/70' : 'text-white/70';

    return (
        <motion.li
            layout
            layoutId={data.id}
            className={`${hoverEnabled ? 'group' : ''} relative cursor-pointer w-[calc(50vw)] h-[calc(50vw)] sm:w-[calc(33.333vw)] sm:h-[calc(33.333vw)] md:w-[calc(25vw)] md:h-[calc(25vw)] lg:w-[calc(20vw)] lg:h-[calc(20vw)] xl:w-[calc(16.666vw)] xl:h-[calc(16.666vw)]`}
            onClick={() => onOpen(data.id)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                layout: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.15 }
            }}
        >
            {/* Background color layer */}
            <div
                className="absolute inset-0"
                style={{ backgroundColor: data.bgColor }}
            />

            {/* Image - fades out on hover or when this card's modal is open */}
            <img
                src={data.image}
                alt={data.title}
                className={`absolute inset-0 w-full h-full transition-opacity duration-200 ease-out group-hover:opacity-0 ${isOpen ? 'opacity-0' : ''}`}
                style={{ objectFit: data.contain ? 'contain' : 'cover' }}
                draggable={false}
            />

            {/* Text - fades in on hover or when this card's modal is open */}
            <div
                className={`absolute inset-0 flex flex-col items-center justify-center p-4 text-center ${textColor} transition-opacity duration-200 ease-out group-hover:opacity-100 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            >
                <h3 className="font-clash font-medium text-sm leading-tight uppercase">{data.title}</h3>
                <p className={`text-xs mt-1 ${textColorSecondary}`}>{data.author}</p>
            </div>
        </motion.li>
    );
}

function FavoriteContent({ data }) {
    return (
        <div className="p-8">
            {data.description && (
                <p className="text-gray-700 leading-relaxed">
                    {data.description}
                </p>
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
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, pointerEvents: 'none' }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            {/* Backdrop */}
            <motion.div
                className="absolute inset-0 bg-black/80 cursor-pointer"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut", delay: 0.15 }}
            />

            {/* Modal content */}
            <motion.div
                id={modalId}
                className="relative max-w-[1000px] w-[94vw] max-h-[90vh] overflow-y-auto shadow-2xl bg-white"
                exit={{ scale: 0.95 }}
            >
                <style>{`#${modalId} ::selection { background-color: ${data.bgColor}; color: ${selectionText}; }`}</style>
                {/* Top bar */}
                <div
                    className="sticky top-0 z-10 flex items-center justify-between px-5 py-4"
                    style={{ backgroundColor: data.bgColor }}
                >
                    <div className="min-w-0 mr-4">
                        <h2
                            className="text-lg font-clash font-medium leading-tight truncate"
                            style={{ color: barText }}
                        >
                            {data.title}
                        </h2>
                        <p
                            className="text-sm mt-0.5 truncate"
                            style={{ color: barTextSecondary }}
                        >
                            {data.author}
                        </p>
                    </div>
                    <motion.button
                        className="shrink-0 w-8 h-8 flex items-center justify-center transition-opacity"
                        style={{ color: barText, opacity: 0.7 }}
                        onClick={onClose}
                        whileHover={{ opacity: 1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </motion.button>
                </div>

                {/* Item content — customizable per item */}
                <FavoriteContent data={data} />
            </motion.div>
        </motion.aside>
    );
}
