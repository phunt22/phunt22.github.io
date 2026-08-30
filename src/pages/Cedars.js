import ThoughtPage from '../components/ThoughtPage';

export default function Cedars() {
    return (
        <ThoughtPage title="Cedars">
            <p>
                Recently, I drove by Cedars in the U District, only to see that they were moving.
                I’m not sure if this is even true, but I always thought that their name was an
                homage to the cedar wood that their original location was made out of. This made
                me think: what other places have a name that no longer makes sense?
            </p>

            <p>
                There are some well-known cases of this: the Los Angeles “Lakers,”
                who are named after the 10,000 lakes of Minnesota, the Utah “Jazz,” named for the
                rich musical history of New Orleans, or the Memphis “Grizzlies,” named after a bear
                that lives 2,500 miles away in Vancouver.
            </p>

            <p>
                But I wanted to find out more about places that are closer to home (or maybe just
                places that aren’t NBA teams). Here is a (growing) list of places in Seattle that
                have some fun history behind their names:
            </p>

            <ul>
                <li>
                    <strong>Rainier Beer</strong> — The most aggressively Washington-branded beer
                    is brewed in Irwindale, California, and owned by Pabst. I wrote an{' '}
                    <a href="/assets/essays/beer-essay.pdf" target="_blank" rel="noreferrer">
                        essay on how beer companies take advantage of regional pride
                    </a>{' '}
                    for a marketing class in college. Interesting stuff.
                </li>
                <li>
                    <strong>Swedish</strong> — Named for the Swedish-American community in Seattle
                    that founded the hospital in the early 1900s.
                </li>
                <li>
                    <strong>Virginia Mason</strong> — Funnily enough, the two founders of the
                    Seattle clinic both had daughters named… Virginia Mason. Wow.
                </li>
            </ul>
        </ThoughtPage>
    );
}
