import ThemedPageHeader from '../components/ThemedPageHeader';
import { FAVORITE_SECTIONS } from '../data/favorites';

const theme = FAVORITE_SECTIONS.find(s => s.slug === 'beer').theme;

function SeattleBeer() {
    return (
        <>
            <ThemedPageHeader title="Seattle Beer" theme={theme} />
            <div style={{ padding: 'var(--space-2xl) var(--space-xl)', maxWidth: 800, margin: '0 auto' }}>
                <p style={{ color: 'var(--color-text-muted)' }}>
                    When I ran an auction for the Bubble Bash Guild, I was in charge of procuring alcohol. Funnily enough, 
                    this meant that I knew most of the breweries in the Seattle area from reaching out, before I was 21. Now 
                    that I am 21, and live in Ballard's brewery district, I figured that I may as well keep a collection of my favorites!
                </p>
            </div>
        </>
    );
}

export default SeattleBeer;
