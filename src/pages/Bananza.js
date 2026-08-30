import ProjectPreview from '../components/ProjectPreview';

export default function Bananza() {
    return (
        <ProjectPreview
            title="Bananza"
            blurb="A fast-moving multiplayer word game about building, rearranging, and thinking on your feet."
            url="http://localhost:5173"
        >
            <p>
                Bananza started as an experiment in making a familiar tabletop game feel
                natural on the web. The interesting part is not just reproducing the rules,
                but preserving the speed and tactility that make playing together fun.
            </p>
            <p>
                The project is still taking shape. You can explore the current version below
                while I continue refining the interactions and multiplayer experience.
            </p>
        </ProjectPreview>
    );
}
