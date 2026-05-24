import { useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage";
import ThemedPageHeader from "../components/ThemedPageHeader";
import { featured } from "../data/featured";
import resumePdf from "../assets/Resume.pdf";
import './Featured.css';

const THEME = { bg: '#f0f0f0', text: '#1a1a1a' };

function Card({ data, onOpen, large, hidden }) {
    const cardClass = [
        'featured-card',
        large ? 'featured-card--large' : '',
        hidden ? 'featured-card--hidden' : '',
    ].filter(Boolean).join(' ');

    return (
        <motion.li
            layoutId={`card-container-${data.id}`}
            onClick={() => onOpen(data.id)}
            className={cardClass}
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
        >
            <motion.div className="featured-card__frame">
                <motion.img
                    src={data.img}
                    alt=""
                    className="featured-card__image"
                    layoutId={`card-img-${data.id}`}
                    draggable={false}
                />
            </motion.div>

            <motion.div
                layoutId={`card-title-${data.id}`}
                className={`featured-card__title-area ${data.dark ? 'featured-card__title-area--dark' : 'featured-card__title-area--light'}`}
            >
                <span className="featured-card__category">{data.category}</span>
                <h2 className="featured-card__title">{data.title}</h2>
                <p className="featured-card__subtitle">{data.subtitle}</p>
            </motion.div>
        </motion.li>
    );
}

function Modal({ data, onClose }) {
    const fullImgStyle = {
        ...(data.fullObjectPosition ? { objectPosition: data.fullObjectPosition } : data.objectPosition ? { objectPosition: data.objectPosition } : {}),
        ...(data.imageBg ? { backgroundColor: data.imageBg } : {}),
    };
    const imgClass = data.fullObjectFit
        ? 'featured-modal__image featured-modal__image--contain'
        : 'featured-modal__image featured-modal__image--cover';

    return (
        <motion.aside
            className="featured-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <motion.div
                className="featured-modal__backdrop"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut", delay: 0.15 }}
            />

            <motion.div
                layoutId={`card-container-${data.id}`}
                className="featured-modal__content"
                exit={{ scale: 0.95 }}
            >
                <motion.img
                    layoutId={`card-img-${data.id}`}
                    src={data.fullImg || data.img}
                    alt={data.title}
                    className={imgClass}
                    draggable={false}
                    decoding="async"
                    style={fullImgStyle}
                />

                <motion.button
                    className="featured-modal__close"
                    onClick={onClose}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </motion.button>

                <motion.div
                    layoutId={`card-title-${data.id}`}
                    className={`featured-modal__title-area ${data.dark ? 'featured-card__title-area--dark' : 'featured-card__title-area--light'}`}
                >
                    <span className="featured-modal__category">{data.category}</span>
                    <h2 className="featured-modal__title">{data.title}</h2>
                    <p className="featured-modal__subtitle">{data.subtitle}</p>
                </motion.div>

                <div className="featured-modal__body">
                    <div className="featured-modal__meta">
                        <div className="featured-modal__period">{data.period}</div>
                        {data.attachments && data.attachments.length > 0 && (
                            <div className="featured-modal__attachments">
                                {data.attachments.map((attachment, index) => (
                                    <a
                                        key={index}
                                        href={attachment.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="featured-modal__attachment"
                                    >
                                        {attachment.name}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    <p className="featured-modal__description">{data.description}</p>

                    <div className="featured-modal__skills">
                        {data.skills.map((skill, index) => (
                            <span key={index} className="featured-modal__skill">{skill}</span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.aside>
    );
}

export default function Featured() {
    const [openId, setOpenId] = useState(null);

    const open = (id) => setOpenId(id);
    const close = () => setOpenId(null);

    return (
        <>
            <ThemedPageHeader title="selected work" backTo="/" theme={THEME}>
                <motion.button
                    className="featured__resume"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(resumePdf, '_blank')}
                >
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Resume</span>
                </motion.button>
            </ThemedPageHeader>
            <AnimatedPage>
                <div className="featured">
                    <LayoutGroup>
                        <ul className="featured__list">
                            {featured.map((item, idx) => (
                                <Card
                                    key={item.id}
                                    data={item}
                                    onOpen={open}
                                    large={window.innerWidth > 768 ? (idx % 4 === 0 || idx % 4 === 3) : false}
                                    hidden={openId === item.id}
                                />
                            ))}
                        </ul>

                        <AnimatePresence mode="wait">
                            {openId && (
                                <Modal
                                    key="modal"
                                    data={featured.find((p) => p.id === openId)}
                                    onClose={close}
                                />
                            )}
                        </AnimatePresence>
                    </LayoutGroup>
                </div>
            </AnimatedPage>
        </>
    );
}
