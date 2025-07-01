import { useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage";
import { projects } from "../data/projects";

/** ------------------------------------------------------------------------
 *  Data – replace or extend as you like
 *  ---------------------------------------------------------------------*/

/* -------------------------------------------------------------------------- */
/*                              Individual Card                               */
/* -------------------------------------------------------------------------- */
function Card({ data, onOpen, large, hidden }) {
    return (
        <motion.li
            layoutId={`card-container-${data.id}`}
            onClick={() => onOpen(data.id)}
            className={`relative h-[420px] cursor-pointer transition-opacity ${large ? "basis-[calc(60%-20px)]" : "basis-[40%]"} ${hidden ? "opacity-0 pointer-events-none" : "opacity-100"}`}
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.98 }}
        >
            {/* Background / image */}
            <motion.div className="absolute inset-0 overflow-hidden rounded-2xl bg-neutral-900 border-2 border-neutral-200/50">
                <motion.img
                    src={data.img}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    layoutId={`card-img-${data.id}`}
                    draggable={false}
                />
            </motion.div>

            {/* Title */}
            <motion.div
                layoutId={`card-title-${data.id}`}
                className={`absolute top-4 left-4 max-w-[300px] ${data.dark ? "text-black" : "text-white"}`}
            >
                <span className="uppercase text-sm tracking-wide">{data.category}</span>
                <h2 className="text-2xl font-semibold leading-snug">{data.title}</h2>
                <p className="text-sm opacity-80 mt-1">{data.subtitle}</p>
            </motion.div>
        </motion.li>
    );
}

/* -------------------------------------------------------------------------- */
/*                                   Modal                                    */
/* -------------------------------------------------------------------------- */
function Modal({ data, onClose }) {
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
                className="absolute inset-0 bg-black/80"
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
                {/* Animated hero image */}
                <motion.img
                    layoutId={`card-img-${data.id}`}
                    src={data.img}
                    alt=""
                    className="w-full h-[420px] object-cover"
                    draggable={false}
                />

                {/* Title overlay */}
                <motion.div
                    layoutId={`card-title-${data.id}`}
                    className={`absolute top-6 left-6 max-w-[320px] ${data.dark ? "text-black" : "text-white"}`}
                >
                    <span className="uppercase text-sm tracking-wide">{data.category}</span>
                    <h2 className="text-3xl font-semibold leading-tight">{data.title}</h2>
                    <p className="text-lg opacity-90 mt-1">{data.subtitle}</p>
                </motion.div>

                {/* Body */}
                <div className="p-8 space-y-6 bg-white text-neutral-800">
                    {/* Period and Attachments */}
                    <div className="flex justify-between items-center">
                        <div className="text-sm text-neutral-600 font-medium">
                            {data.period}
                        </div>
                        {data.attachments && data.attachments.length > 0 && (
                            <div className="flex gap-2">
                                {data.attachments.map((attachment, index) => (
                                    <a
                                        key={index}
                                        href={attachment.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer"
                                    >
                                        {attachment.name}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Description */}
                    <p className="text-lg leading-relaxed">
                        {data.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                        {data.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium"
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

/* -------------------------------------------------------------------------- */
/*                               Main Component                               */
/* -------------------------------------------------------------------------- */
export default function AppStore() {
    const [openId, setOpenId] = useState(null);
    const open = (id) => setOpenId(id);
    const close = () => setOpenId(null);

    return (
        <AnimatedPage>
            <div className="w-full max-w-[1200px] mx-auto py-20 px-5">
                {/* Header */}
                <header className="flex items-center justify-between mb-6">
                    <h1 className="text-4xl font-semibold tracking-tight">My Work</h1>
                    <motion.button
                        className="relative overflow-hidden bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 before:ease-in-out"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            const pdfUrl = '/assets/Resume.pdf';
                            window.open(pdfUrl, '_blank');
                        }}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Download Resume</span>
                    </motion.button>
                </header>

                <LayoutGroup>
                    {/* Card grid */}
                    <ul className="flex flex-wrap gap-5">
                        {projects.map((project, idx) => (
                            <Card
                                key={project.id}
                                data={project}
                                onOpen={open}
                                large={idx % 4 === 0 || idx % 4 === 3}
                                hidden={openId === project.id}
                            />
                        ))}
                    </ul>

                    {/* Modal */}
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
