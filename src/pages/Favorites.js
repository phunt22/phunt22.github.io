import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import { FAVORITE_YEARS, getYearTheme, getFavoritesByYear } from '../data/favorites';

function FlyingImage({ src, speed, onDone }) {
    const style = useMemo(() => {
        const size = 48 + Math.random() * 40; // 48-88px
        const topPercent = 5 + Math.random() * 70; // 5-75% from top
        const rotation = -20 + Math.random() * 40; // -20 to +20 deg
        const baseDuration = 2.5 + Math.random() * 2; // 2.5-4.5s
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

function YearBanner({ year, index }) {
    const theme = getYearTheme(year);
    const [isHovered, setIsHovered] = useState(false);
    const [flyingImages, setFlyingImages] = useState([]);
    const nextId = useRef(0);
    const hoverStart = useRef(0);

    const imageSrcs = useMemo(() => {
        return getFavoritesByYear(year).filter(f => f.image).map(f => f.image);
    }, [year]);

    const getSpeed = useCallback(() => {
        const elapsed = (Date.now() - hoverStart.current) / 1000;
        // Ramp from 1x to 4x over 8 seconds
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
        if (!isHovered || imageSrcs.length === 0) {
            setFlyingImages([]);
            return;
        }

        hoverStart.current = Date.now();

        // Spawn a burst immediately
        for (let i = 0; i < 4; i++) {
            setTimeout(() => spawnImage(), i * 150);
        }

        // Accelerating spawn rate via recursive timeout
        let timeoutId;
        const scheduleNext = () => {
            const speed = getSpeed();
            const delay = Math.max(400 / speed, 80);
            timeoutId = setTimeout(() => {
                spawnImage();
                scheduleNext();
            }, delay);
        };
        scheduleNext();

        return () => clearTimeout(timeoutId);
    }, [isHovered, spawnImage, getSpeed, imageSrcs.length]);

    return (
        <motion.div
            key={year}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
        >
            <Link to={`/favorites/${year}`} className="block">
                <motion.div
                    className="relative w-full cursor-pointer overflow-hidden flex items-center justify-center"
                    style={{
                        backgroundColor: theme.bg,
                        height: '28vh',
                        minHeight: '180px',
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Heavy noise grain overlay */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            opacity: 0.25,
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                            backgroundSize: '256px 256px',
                        }}
                    />

                    {/* Flying images */}
                    {flyingImages.map((img) => (
                        <FlyingImage
                            key={img.id}
                            src={img.src}
                            speed={img.speed}
                            onDone={() => removeImage(img.id)}
                        />
                    ))}

                    {/* Year text */}
                    <span
                        className="relative z-10 font-clash font-semibold text-7xl md:text-8xl lg:text-9xl leading-none tracking-tight select-none"
                        style={{ color: theme.text }}
                    >
                        {year}
                    </span>
                </motion.div>
            </Link>
        </motion.div>
    );
}

export default function Favorites() {
    return (
        <AnimatedPage>
            <style>{`
                @keyframes flyAcross {
                    from { transform: translateX(-100px) rotate(var(--rot, 0deg)); opacity: 0; }
                    5% { opacity: 1; }
                    to { transform: translateX(calc(100vw + 100px)) rotate(var(--rot, 0deg)); opacity: 1; }
                }
            `}</style>
            <div className="w-full flex flex-col pt-20">
                {FAVORITE_YEARS.map((year, index) => (
                    <YearBanner key={year} year={year} index={index} />
                ))}
            </div>
        </AnimatedPage>
    );
}
