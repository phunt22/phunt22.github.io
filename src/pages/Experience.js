// import { motion } from "framer-motion";
// import AnimatedPage from "../components/AnimatedPage";
// import { useEffect } from "react";
// import { STICKERS } from "../data/stickers";
// import Sticker from "../components/Sticker";




// const renderStickers = () => {
//     return STICKERS.map((sticker) => (
//         <Sticker
//             key={sticker.slug}
//             sticker={sticker}
//         />
//     ));
// }


// export default function Experience() {
//     return (
//         <AnimatedPage>
//             <div className="container mx-auto px-4 py-8">
//                 <h1>
//                     Welcome to experience
//                 </h1>
//                 {renderStickers()}
//             </div>
//         </AnimatedPage>
//     )
// }


import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";
import AnimatedPage from "../components/AnimatedPage";

/* ------------------------------------------------------
 * StickerScrapbook – logo‑friendly, efficient outline
 * ------------------------------------------------------ */

// Torn‑paper polygon (for jagged shape)
const jaggedClip =
    "polygon(0 6%,10% 0,20% 8%,30% 2%,40% 6%,50% 1%,60% 7%,70% 0,80% 5%,90% 0,100% 8%,100% 94%,90% 100%,80% 92%,70% 100%,60% 93%,50% 99%,40% 93%,30% 100%,20% 92%,10% 100%,0 94%)";

/* --- helpers ----------------------------------------------------------- */
const shapeClass = (shape) =>
    shape === "circle" ? "rounded-full" : shape === "square" ? "rounded-xl" : "";

const shapeStyle = (shape) => (shape === "jagged" ? { clipPath: jaggedClip } : undefined);
const rand = (min, max) => Math.random() * (max - min) + min;

/* --- default demo data ----------------------------------------------- */
const defaultExperiences = [
    {
        id: "boston",
        title: "Boston Marathon 2025",
        category: "Running",
        image:
            "https://images.unsplash.com/photo-1520975614757-6cbf12276d27?auto=format&fit=crop&w=800&q=80",
        shape: "circle",
        sizeClass: "w-44",
        ringClass: "ring-yellow-300",
        contentType: "text",
        body: ["Finished Boylston in 2:41 — goosebumps the whole way!"]
    },
    {
        id: "usaa",
        title: "USAA Internship",
        category: "Career",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/28/USAA_Logo.png",
        shape: "free", // respect PNG alpha
        sizeClass: "w-40",
        ringClass: "",
        contentType: "list",
        body: ["Mobile team", "SwiftUI", "Texas BBQ Fridays"]
    },
    {
        id: "hike",
        title: "Cascade Sunrise Hike",
        category: "Adventure",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
        shape: "square",
        sizeClass: "w-52",
        ringClass: "ring-emerald-400",
        contentType: "gallery",
        body: [
            "https://images.unsplash.com/photo-1508750514770-4eaffe6da6ae?auto=format&fit=crop&w=700&q=80",
            "https://images.unsplash.com/photo-1516305193416-de3be11241d4?auto=format&fit=crop&w=700&q=80",
            "https://images.unsplash.com/photo-1504386106331-4eb81f9d9eeb?auto=format&fit=crop&w=700&q=80"
        ]
    },
    {
        id: "rev",
        title: "REV Delivery Launch",
        category: "Startup",
        image: "https://images.unsplash.com/photo-1564869737245-479f01f35a98?auto=format&fit=crop&w=800&q=80",
        shape: "jagged",
        sizeClass: "w-40",
        ringClass: "ring-rose-400",
        contentType: "text",
        body: ["Scaled to 4k users & $100k/mo across UW + USC"]
    }
];

/* --- main component --------------------------------------------------- */
export default function StickerScrapbook({ experiences = defaultExperiences }) {
    const [openId, setOpenId] = useState(null);
    const openExp = experiences.find((e) => e.id === openId);

    return (
        <AnimatedPage>
            <section className="relative w-full px-6 py-10 sm:py-14">
                {/* scrapbook grid */}
                <div className="flex flex-wrap justify-center gap-10 sm:gap-12">
                    {experiences.map((exp) => (
                        <Sticker key={exp.id} exp={exp} onOpen={() => setOpenId(exp.id)} />
                    ))}
                </div>

                <AnimatePresence>
                    {openExp && (
                        <Modal onClose={() => setOpenId(null)}>{renderBody(openExp)}</Modal>
                    )}
                </AnimatePresence>
            </section>
        </AnimatedPage>
    );
}

/* --- sticker tile ----------------------------------------------------- */
function Sticker({ exp, onOpen }) {
    // stable randoms via ref (doesn’t trigger re‑render)
    const rotateRef = useRef(rand(-8, 8));
    const yRef = useRef(rand(-10, 10));

    const base = "relative cursor-pointer select-none";
    const shadow = "drop-shadow-sm hover:drop-shadow-lg"; // single shadow for perf

    // single drop‑shadow → lighter on GPU; no chained filters
    const filterOutline =
        exp.shape === "free" ? { filter: "drop-shadow(0 0 3px #fff)" } : {};

    return (
        <motion.div
            className={classNames(base, shadow, exp.sizeClass, shapeClass(exp.shape))}
            style={{ ...shapeStyle(exp.shape), ...filterOutline }}
            initial={{ rotate: rotateRef.current, y: yRef.current }}
            whileHover={{ scale: 1.08, rotate: 0, zIndex: 40 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            onClick={onOpen}
        >
            {/* outline for circle/square/jagged */}
            {exp.shape !== "free" && (
                <div
                    className={classNames(
                        "absolute inset-0 pointer-events-none ring-6",
                        exp.ringClass,
                        shapeClass(exp.shape)
                    )}
                    style={shapeStyle(exp.shape)}
                />
            )}

            {/* image */}
            <img
                src={exp.image}
                alt={exp.title}
                loading="lazy"
                decoding="async"
                className={classNames(
                    "w-full h-full object-contain",
                    exp.shape === "circle" && "rounded-full"
                )}
                style={shapeStyle(exp.shape)}
            />
        </motion.div>
    );
}

/* --- modal ------------------------------------------------------------ */
function Modal({ children, onClose }) {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onKeyDown={(e) => e.key === "Escape" && onClose()}
            tabIndex={-1}
        >
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            />
            <motion.div
                className="relative z-50 w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-8 shadow-2xl"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", stiffness: 220, damping: 26 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}

/* --- content renderer ------------------------------------------------- */
function renderBody(exp) {
    if (exp.contentType === "list") {
        return (
            <>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">{exp.title}</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    {exp.body.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </>
        );
    }

    if (exp.contentType === "gallery") {
        return (
            <>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">{exp.title}</h2>
                <div className="flex space-x-4 overflow-x-auto pb-2 -mx-2 px-2">
                    {exp.body.map((src) => (
                        <img
                            key={src}
                            src={src}
                            alt={exp.title}
                            loading="lazy"
                            decoding="async"
                            className="w-56 h-40 object-cover rounded-lg flex-shrink-0"
                        />
                    ))}
                </div>
            </>
        );
    }

    return (
        <>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{exp.title}</h2>
            <div className="space-y-3 text-gray-700">
                {exp.body.map((p) => (
                    <p key={p}>{p}</p>
                ))}
            </div>
        </>
    );
}
