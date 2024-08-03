import '../styles/projectCard.css'


const ProjectCard = ({ title, subtitle, description, video }) => {
    return (
        <div style={{ width: '90%', alignItems: 'center', backgroundColor: 'white', borderRadius: 16, paddingBottom: 16, paddingTop: 8, marginBottom: 60 }}>
            <h1 style={{ color: 'black', margin: 0, marginTop: 2, }}>{title}</h1>
            <p style={{ color: 'black', margin: 0, marginBottom: 8, }}>{subtitle}</p>
            {video}
            <div style={{ color: 'black', marginLeft: 8, marginRight: 8, textAlign: 'left', maxWidth: '100%', alignItems: 'center', marginLeft: '5%' }}>{description}</div>
        </div>
    )
};

export default ProjectCard; 