import { useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage";
import BackLink from "../components/BackLink";
import { projects } from "../data/projects";
import resumePdf from "../assets/Resume.pdf";
import './Projects.css';

function Card({ data, onOpen, large, hidden }) {
    const cardClass = [
        'project-card',
        large ? 'project-card--large' : '',
        hidden ? 'project-card--hidden' : '',
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
            <motion.div className="project-card__frame">
                <motion.img
                    src={data.img}
                    alt=""
                    className="project-card__image"
                    layoutId={`card-img-${data.id}`}
                    draggable={false}
                />
            </motion.div>

            <motion.div
                layoutId={`card-title-${data.id}`}
                className={`project-card__title-area ${data.dark ? 'project-card__title-area--dark' : 'project-card__title-area--light'}`}
            >
                <span className="project-card__category">{data.category}</span>
                <h2 className="project-card__title">{data.title}</h2>
                <p className="project-card__subtitle">{data.subtitle}</p>
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
        ? 'project-modal__image project-modal__image--contain'
        : 'project-modal__image project-modal__image--cover';

    return (
        <motion.aside
            className="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <motion.div
                className="project-modal__backdrop"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut", delay: 0.15 }}
            />

            <motion.div
                layoutId={`card-container-${data.id}`}
                className="project-modal__content"
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
                    className="project-modal__close"
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
                    className={`project-modal__title-area ${data.dark ? 'project-card__title-area--dark' : 'project-card__title-area--light'}`}
                >
                    <span className="project-modal__category">{data.category}</span>
                    <h2 className="project-modal__title">{data.title}</h2>
                    <p className="project-modal__subtitle">{data.subtitle}</p>
                </motion.div>

                <div className="project-modal__body">
                    <div className="project-modal__meta">
                        <div className="project-modal__period">{data.period}</div>
                        {data.attachments && data.attachments.length > 0 && (
                            <div className="project-modal__attachments">
                                {data.attachments.map((attachment, index) => (
                                    <a
                                        key={index}
                                        href={attachment.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-modal__attachment"
                                    >
                                        {attachment.name}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    <p className="project-modal__description">{data.description}</p>

                    <div className="project-modal__skills">
                        {data.skills.map((skill, index) => (
                            <span key={index} className="project-modal__skill">{skill}</span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.aside>
    );
}

export default function Projects() {
    const [openId, setOpenId] = useState(null);

    const open = (id) => setOpenId(id);
    const close = () => setOpenId(null);

    return (
        <AnimatedPage>
            <div className="page-top">
                <BackLink />
            </div>
            <div className="projects">
                <header className="projects__header">
                    <h1 className="projects__title">selected work</h1>
                    <motion.button
                        className="projects__resume"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open(resumePdf, '_blank')}
                    >
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Resume</span>
                    </motion.button>
                </header>

                <LayoutGroup>
                    <ul className="projects__list">
                        {projects.map((project, idx) => (
                            <Card
                                key={project.id}
                                data={project}
                                onOpen={open}
                                large={window.innerWidth > 768 ? (idx % 4 === 0 || idx % 4 === 3) : false}
                                hidden={openId === project.id}
                            />
                        ))}
                    </ul>

                    <AnimatePresence mode="wait">
                        {openId && (
                            <Modal
                                key="modal"
                                data={projects.find((p) => p.id === openId)}
                                onClose={close}
                            />
                        )}
                    </AnimatePresence>
                </LayoutGroup>
            </div>
        </AnimatedPage>
    );
}
