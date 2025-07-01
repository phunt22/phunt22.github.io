// to edit colors, go to tailwind.config.js, must be named the same as name in socialLinks

import { EmailIcon, GithubIcon, LinkedInIcon, StravaIcon } from "../icons/socialIcons";

export const socialLinks = [
    {
        name: 'github',
        url: 'https://github.com/phunt22',
        icon: <GithubIcon />,
    },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/william-hunt-7895a3212/',
        icon: <LinkedInIcon />,
    },
    {
        name: 'strava',
        url: 'https://www.strava.com/athletes/42523780?utm_source=ios_share&utm_medium=social&share_sig=5D647F231750274767&_branch_match_id=1448808921527731059&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXLy4pSixL1EssKNDLyczL1vfwDbMwS%2FeyyAxNsq8rSk1LLSrKzEuPTyrKLy9OLbINTkxLLMoEAKS%2BESM9AAAA',
        icon: <StravaIcon />,
    },
    {
        name: 'email',
        url: 'mailto:pw.hunt11@gmail.com',
        icon: <EmailIcon />,
    }
];