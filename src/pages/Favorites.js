import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import ThemedPageHeader from '../components/ThemedPageHeader';
import {
    FAVORITE_YEARS,
    FAVORITE_SECTIONS,
    getYearTheme,
    getFavoritesByYear,
} from '../data/favorites';
import './Favorites.css';

const NOISE_BG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`;

function FlyingImage({ src, speed, onDone }) {
    const style = useMemo(() => {
        const size = 48 + Math.random() * 40;
        const topPercent = 5 + Math.random() * 70;
        const rotation = -20 + Math.random() * 40;
        const baseDuration = 4 + Math.random() * 2.5;
        const duration = baseDuration / speed;

        return {
            position: 'absolute',
            top: `${topPercent}%`,
            left: 0,
            width: `${size}px`,
            height: `${size}px`,
            objectFit: 'cover',
            pointerEvents: 'none',
            '--rot': `${rotation}deg`,
            animation: `flyAcross ${duration}s linear forwards`,
            boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <img
            src={src}
            alt=""
            draggable={false}
            style={style}
            onAnimationEnd={onDone}
        />
    );
}

function Banner({ label, to, theme, imageSrcs = [], index }) {
    const [isHovered, setIsHovered] = useState(false);
    const [flyingImages, setFlyingImages] = useState([]);
    const [shineKey, setShineKey] = useState(0);
    const nextId = useRef(0);
    const hoverStart = useRef(0);

    const getSpeed = useCallback(() => {
        const elapsed = (Date.now() - hoverStart.current) / 1000;
        return Math.min(1 + elapsed * 0.375, 4);
    }, []);

    const spawnImage = useCallback(() => {
        const src = imageSrcs[Math.floor(Math.random() * imageSrcs.length)];
        const id = nextId.current++;
        const speed = getSpeed();
        setFlyingImages(prev => [...prev, { id, src, speed }]);
    }, [imageSrcs, getSpeed]);

    const removeImage = useCallback((id) => {
        setFlyingImages(prev => prev.filter(img => img.id !== id));
    }, []);

    useEffect(() => {
        if (!isHovered || imageSrcs.length === 0) return;

        hoverStart.current = Date.now();

        let timeoutId;
        timeoutId = setTimeout(() => {
            for (let i = 0; i < 4; i++) {
                setTimeout(() => spawnImage(), i * 150);
            }

            const scheduleNext = () => {
                const speed = getSpeed();
                const delay = Math.max(400 / speed, 80);
                timeoutId = setTimeout(() => {
                    spawnImage();
                    scheduleNext();
                }, delay);
            };
            scheduleNext();
        }, 200);

        return () => clearTimeout(timeoutId);
    }, [isHovered, spawnImage, getSpeed, imageSrcs.length]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.05 + index * 0.05 }}
        >
            <Link to={to} className="favorites__banner-link">
                <motion.div
                    className="favorites__banner"
                    style={{ backgroundColor: theme.bg }}
                    onMouseEnter={() => { setIsHovered(true); setShineKey(k => k + 1); }}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="favorites__noise" style={{ backgroundImage: NOISE_BG }} />

                    {flyingImages.map((img) => (
                        <FlyingImage
                            key={img.id}
                            src={img.src}
                            speed={img.speed}
                            onDone={() => removeImage(img.id)}
                        />
                    ))}

                    <motion.span
                        className="favorites__label"
                        style={{ color: theme.text }}
                        animate={{ scale: isHovered ? 1.08 : 1 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 36 }}
                    >
                        {label}
                        {shineKey > 0 && (
                            <span
                                key={shineKey}
                                aria-hidden="true"
                                className="favorites__label-shine"
                                style={{ '--shine-color': theme.bg }}
                                onAnimationEnd={() => setShineKey(0)}
                            >
                                {label}
                            </span>
                        )}
                    </motion.span>
                </motion.div>
            </Link>
        </motion.div>
    );
}

export default function Favorites() {
    const yearBanners = FAVORITE_YEARS.map((year) => ({
        key: `year-${year}`,
        label: String(year),
        to: `/favorites/${year}`,
        theme: getYearTheme(year),
        imageSrcs: getFavoritesByYear(year).filter(f => f.image).map(f => f.image),
    }));

    const sectionBanners = FAVORITE_SECTIONS.map((section) => ({
        key: `section-${section.slug}`,
        label: section.label,
        to: `/favorites/${section.slug}`,
        theme: section.theme,
        imageSrcs: [],
    }));

    const banners = [...yearBanners, ...sectionBanners];

    const FAVORITES_THEME = { bg: '#f0f0f0', text: '#1a1a1a' };

    return (
        <>
            <ThemedPageHeader title="favorites" backTo="/" theme={FAVORITES_THEME} />
            <AnimatedPage>
                <div className="favorites">
                    {banners.map((banner, index) => (
                        <Banner
                            key={banner.key}
                            label={banner.label}
                            to={banner.to}
                            theme={banner.theme}
                            imageSrcs={banner.imageSrcs}
                            index={index}
                        />
                    ))}
                </div>
            </AnimatedPage>
        </>
    );
}
