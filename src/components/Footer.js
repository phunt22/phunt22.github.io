import { socialLinks } from "../data/socialLinks";
import { motion } from "framer-motion";

const hoverBg = {
    github: "hover:bg-github",
    linkedin: "hover:bg-linkedin",
    strava: "hover:bg-strava",
    email: "hover:bg-email",
};

export default function Footer() {
    return (
        <footer className="relative border-t border-white/10 py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center space-y-4">
                    <motion.div
                        className="flex space-x-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-150 ${hoverBg[social.name]} text-gray-600 hover:text-white`}
                                aria-label={social.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.1,
                                    delay: 0,
                                    type: "spring",
                                    stiffness: 200
                                }}

                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div>


                </div>
            </div>
        </footer>
    );
}