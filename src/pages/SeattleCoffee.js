import BackLink from '../components/BackLink';

function SeattleCoffee() {
    return (
        <>
            <div className="page-top">
                <BackLink to="/favorites" />
            </div>
            <div style={{ padding: 'var(--space-2xl) var(--space-xl)', maxWidth: 1200, margin: '0 auto' }}>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', fontWeight: 500, letterSpacing: '-0.02em' }}>
                    Seattle Coffee
                </h1>
                <p style={{ color: 'var(--color-text-muted)', marginTop: 'var(--space-lg)' }}>
                    Coming soon.
                </p>
            </div>
        </>
    );
}

export default SeattleCoffee;
