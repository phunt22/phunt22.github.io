import { useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage";
import { projects } from "../data/projects";

function Card({ data, onOpen, large, hidden }) {
    return (
        <motion.li
            layoutId={`card-container-${data.id}`}
            onClick={() => onOpen(data.id)}
            className={`relative h-[420px] cursor-pointer transition-opacity ${large ? "basis-[calc(60%-8px)]" : "basis-[calc(50%-8px)] md:basis-[calc(40%-8px)]"} ${hidden ? "opacity-0 pointer-events-none" : "opacity-100"}`}
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
        >
            <motion.div className="absolute inset-0 overflow-hidden rounded-2xl bg-neutral-900 border-2 border-neutral-200/90">
                <motion.img
                    src={data.img}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    layoutId={`card-img-${data.id}`}
                    draggable={false}
                />
            </motion.div>

            <motion.div
                layoutId={`card-title-${data.id}`}
                className={`absolute top-4 left-4 max-w-[300px] ${data.dark ? "text-black" : "text-white"}`}
            >
                <span className="uppercase text-[10px] sm:text-xs tracking-wide font-medium">{data.category}</span>
                <h2 className="text-lg sm:text-2xl font-semibold leading-snug mt-1">{data.title}</h2>
                <p className="text-xs sm:text-sm opacity-80 mt-1">{data.subtitle}</p>
            </motion.div>
        </motion.li>
    );
}

function Modal({ data, onClose }) {
    return (
        <motion.aside
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <motion.div
                className="absolute inset-0 bg-black/80 cursor-pointer"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut", delay: 0.15 }}
            />

            {/* Card grows / shrinks */}
            <motion.div
                layoutId={`card-container-${data.id}`}
                className="relative max-w-[800px] w-[90vw] max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
                exit={{ scale: 0.95 }}
            // transition={{ type: "spring", stiffness: 150, damping: 20 }}
            >
                <motion.img
                    layoutId={`card-img-${data.id}`}
                    src={data.img}
                    alt=""
                    className="w-full h-[420px] object-cover"
                    draggable={false}
                />

                <motion.button
                    className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg"
                    onClick={onClose}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </motion.button>

                <motion.div
                    layoutId={`card-title-${data.id}`}
                    className={`absolute top-6 left-6 max-w-[320px] ${data.dark ? "text-black" : "text-white"}`}
                >
                    <span className="uppercase text-[10px] sm:text-xs tracking-wide font-medium">{data.category}</span>
                    <h2 className="text-xl sm:text-3xl font-semibold leading-tight mt-1">{data.title}</h2>
                    <p className="text-sm sm:text-lg opacity-90 mt-1">{data.subtitle}</p>
                </motion.div>

                <div className="p-4 sm:p-8 space-y-4 sm:space-y-6 bg-white text-neutral-800">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                        <div className="text-xs sm:text-sm text-neutral-600 font-medium">
                            {data.period}
                        </div>
                        {data.attachments && data.attachments.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {data.attachments.map((attachment, index) => (
                                    <a
                                        key={index}
                                        href={attachment.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-2 py-1 sm:px-3 sm:py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer"
                                    >
                                        {attachment.name}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-lg leading-relaxed">
                        {data.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                        {data.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 sm:px-3 sm:py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs sm:text-sm font-medium"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.aside>
    );
}

export default function AppStore() {
    const [openId, setOpenId] = useState(null);

    const open = (id) => setOpenId(id);
    const close = () => setOpenId(null);

    return (
        <AnimatedPage>
            <div className="w-full max-w-[1200px] mx-auto pt-20 px-5">
                <header className="flex items-center justify-between mb-6">
                    <h1 className="text-4xl font-semibold tracking-tight">My Work</h1>
                    <motion.button
                        className="relative overflow-hidden bg-neutral-900 hover:bg-neutral-800 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl text-sm sm:text-base before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-in-out"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            const pdfUrl = '/assets/Resume.pdf';
                            window.open(pdfUrl, '_blank');
                        }}
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Resume</span>
                    </motion.button>
                </header>

                <LayoutGroup>
                    <ul className="flex flex-wrap gap-4">
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
