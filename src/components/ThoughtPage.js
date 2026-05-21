import AnimatedPage from './AnimatedPage';
import ThemedPageHeader from './ThemedPageHeader';
import './ThoughtPage.css';

const THEME = { bg: '#f0f0f0', text: '#1a1a1a' };

export default function ThoughtPage({ title, date, readTime, children }) {
    const metaParts = [date, readTime].filter(Boolean).join(' · ');

    return (
        <>
            <ThemedPageHeader title="thoughts" backTo="/thoughts" theme={THEME} />
            <AnimatedPage>
                <article className="thought-page">
                    <header className="thought-page__header">
                        <h1 className="thought-page__title">{title}</h1>
                        {metaParts && <p className="thought-page__meta">{metaParts}</p>}
                    </header>

                    <div className="thought-page__body">{children}</div>
                </article>
            </AnimatedPage>
        </>
    );
}
