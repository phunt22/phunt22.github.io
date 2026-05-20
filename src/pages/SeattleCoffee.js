import ThemedPageHeader from '../components/ThemedPageHeader';
import { FAVORITE_SECTIONS } from '../data/favorites';

const theme = FAVORITE_SECTIONS.find(s => s.slug === 'coffee').theme;

function SeattleCoffee() {
    return (
        <>
            <ThemedPageHeader title="Seattle Coffee" theme={theme} />
            <div style={{ padding: 'var(--space-2xl) var(--space-xl)', maxWidth: 1200, margin: '0 auto' }}>
                <p style={{ color: 'var(--color-text-muted)' }}>
                    Coming soon.
                </p>
            </div>
        </>
    );
}

export default SeattleCoffee;
