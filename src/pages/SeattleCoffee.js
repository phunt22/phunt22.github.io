import ThemedPageHeader from '../components/ThemedPageHeader';
import { FAVORITE_SECTIONS } from '../data/favorites';

const theme = FAVORITE_SECTIONS.find(s => s.slug === 'coffee').theme;

function SeattleCoffee() {
    return (
        <>
            <ThemedPageHeader title="Seattle Coffee" theme={theme} />
            <div style={{ padding: 'var(--space-2xl) var(--space-xl)', maxWidth: 800, margin: '0 auto' }}>
                <p style={{ color: 'var(--color-text-muted)' }}>
                    Similar to the beer page, I figured that if I'm going to have all of this coffee, 
                    I might as well keep track. If you ever have any recs (or want to grab one) let me know!
                </p>
            </div>
        </>
    );
}

export default SeattleCoffee;
