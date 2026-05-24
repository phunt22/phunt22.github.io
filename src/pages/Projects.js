import './Projects.css';

const projects = [
    { title: 'Alex Brandon Portfolio', href: 'https://alexbrandon.co/' },
    { title: 'Model Madness', href: 'https://modelmadness.dev/' },
];

export default function Projects() {
    return (
        <div className="projects">
            <ul className="projects__list">
                {projects.map((p, i) => (
                    <li key={p.title} className="projects__item">
                        <p className='projects__number'>{i}</p>
                        <a href={p.href} className="projects__link">{p.title}</a>
                    </li>
                ))}
                <li className="projects__item">
                    <p className='projects__number'>+</p>
                    <a href="mailto:pw.hunt11@gmail.com" className="projects__link"> + Request a project</a>
                </li>
            </ul>
        </div>
    );
}
