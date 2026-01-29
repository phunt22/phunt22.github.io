import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const getBrightness = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000;
};

export function FavoriteGridCard({ data, onOpen }) {
    const [isHovered, setIsHovered] = useState(false);

    const textColor = getBrightness(data.bgColor) > 128 ? 'text-black' : 'text-white';
    const textColorSecondary = getBrightness(data.bgColor) > 128 ? 'text-black/70' : 'text-white/70';

    return (
        <motion.li
            layout
            layoutId={data.id}
            className="relative cursor-pointer w-[calc(50vw)] h-[calc(50vw)] sm:w-[calc(33.333vw)] sm:h-[calc(33.333vw)] md:w-[calc(25vw)] md:h-[calc(25vw)] lg:w-[calc(20vw)] lg:h-[calc(20vw)] xl:w-[calc(16.666vw)] xl:h-[calc(16.666vw)]"
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
            {/* Background color layer */}
            <div
                className="absolute inset-0"
                style={{ backgroundColor: data.bgColor }}
            />

            {/* Image - fades out on hover */}
            <motion.img
                src={data.image}
                alt={data.title}
                className="absolute inset-0 w-full h-full object-cover"
                animate={{ opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                draggable={false}
            />

            {/* Text - fades in on hover, centered */}
            <motion.div
                className={`absolute inset-0 flex flex-col items-center justify-center p-4 text-center ${textColor}`}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
            >
                <h3 className="font-semibold text-sm leading-tight uppercase">{data.title}</h3>
                <p className={`text-xs mt-1 ${textColorSecondary}`}>{data.author}</p>
            </motion.div>
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

    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <motion.aside
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
                className="relative max-w-[1000px] w-[94vw] max-h-[90vh] overflow-y-auto shadow-2xl bg-white"
                exit={{ scale: 0.95 }}
            >
                {/* Colored top bar */}
                <div
                    className="sticky top-0 z-10 flex items-center justify-between px-5 py-4"
                    style={{ backgroundColor: data.bgColor }}
                >
                    <div className="min-w-0 mr-4">
                        <h2
                            className="text-lg font-semibold leading-tight truncate"
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
