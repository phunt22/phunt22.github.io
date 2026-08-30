import BackLink from './BackLink';
import './ProjectPreview.css';

export default function ProjectPreview({
    title,
    blurb,
    url,
    frameTitle = `${title} website preview`,
    children,
}) {
    return (
        <main className="project-preview">
            <header className="project-preview__header">
                <BackLink to="/projects" label="Back to projects" />
            </header>

            <section className="project-preview__intro">
                <h1 className="project-preview__title">{title}</h1>
                <p className="project-preview__blurb">{blurb}</p>
            </section>

            {children && (
                <section className="project-preview__writing">
                    {children}
                </section>
            )}

            <iframe
                className="project-preview__frame"
                src={url}
                title={frameTitle}
            />
        </main>
    );
}
