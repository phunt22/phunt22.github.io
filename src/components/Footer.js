import { socialLinks } from "../data/socialLinks";

const hoverBg = {
    github: "hover:bg-github",
    linkedin: "hover:bg-linkedin",
    strava: "hover:bg-strava",
    email: "hover:bg-email",
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center space-y-4">
                    {/* Social Links */}
                    <div className="flex space-x-6">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 ${hoverBg[social.name]}`}
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