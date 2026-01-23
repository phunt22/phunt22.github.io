import { useEffect, useState } from "react";
import { socialLinks } from "../data/socialLinks";

const hoverBg = {
    github: "hover:bg-github",
    linkedin: "hover:bg-linkedin",
    strava: "hover:bg-strava",
    email: "hover:bg-email",
};

export default function Footer() {
    const [shouldAnimateIcons] = useState(() => {
        if (typeof window === 'undefined') return false;
        return sessionStorage.getItem('footerAnimated') !== 'true';
    });

    useEffect(() => {
        if (!shouldAnimateIcons) return;
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('footerAnimated', 'true');
        }
    }, [shouldAnimateIcons]);

    return (
        <footer className="relative border-t border-white/10 py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center space-y-4">
                    <div className={`flex space-x-8 ${shouldAnimateIcons ? 'fade-in-footer' : ''}`}>
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-125 ${hoverBg[social.name]} text-gray-600 hover:text-white`}
                                aria-label={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
