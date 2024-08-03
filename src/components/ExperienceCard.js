import React from 'react';

const WorkExpCard = ({ title, subtitle, description, photo }) => {
    return (
        <div style={styles.card}>
            <div style={styles.cardContent}>
                <div style={styles.headerContainer}>
                    <div style={styles.imageContainer}>
                        <img src={photo} alt={`${title} photo`} style={styles.image} />
                    </div>
                    <div style={styles.titleContainer}>
                        <h1 style={styles.title}>{title}</h1>
                        <h3 style={styles.subtitle}>{subtitle}</h3>
                    </div>
                </div>
                <div style={styles.textContainer}>
                    <p style={styles.description}>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default WorkExpCard;

const styles = {
    card: {
        width: '80%',
        margin: '20px auto',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center'
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '20px',
    },
    imageContainer: {
        marginRight: '20px',
        flexShrink: 0,
        boxSizing: 'border-box',
    },
    image: {
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        objectFit: 'cover',
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        boxSizing: 'border-box',
    },
    title: {
        fontSize: '24px',
        fontWeight: '600',
        margin: '0',
        color: 'black',
        whiteSpace: 'nowrap',
    },
    subtitle: {
        fontSize: '18px',
        fontWeight: '400',
        margin: '0',
        color: 'black',
        whiteSpace: 'nowrap',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        boxSizing: 'border-box',
        // alignSelf: 'center'

    },
    description: {
        fontSize: '16px',
        fontWeight: '300',
        color: 'black',
        textAlign: 'left'

    },
};
