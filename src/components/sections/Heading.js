import {Link, useLocation} from 'react-router-dom';

export default function Heading() {
    const location = useLocation();
    const showLink = !location.pathname.includes("reservations");

    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="subsection">We are a family owned Mediterranean restaurant,
                        located on  Maldove Street in Chicago, Illinois.
                        We focus on traditional recipes served with a modern twist.</p>
                    <br></br>
                    {showLink && <Link className="action-button" to="/reservations">Reserve a table</Link>}
                </section>

                <section className="hero-image">
                    <img src={require('../../images/dips.png')} alt="Little Lemon restaurant cuisine"></img>
                </section>
            </article>
        </header>
    );
}