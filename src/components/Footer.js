import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer>
            <menu>
                <li className="img-footer">
                    <img
                        src={require("../images/logo-small.png")}
                        alt="Little Lemon logo"
                    ></img>
                </li>
                <li className="contact">
                    <h1 className="footer-header">Navigation</h1>
                    <ul className="footer-links">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <a
                            href={require("../images/logo-big.png")}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Menu
                        </a>
                        <Link to="/reservations">Reservations</Link>
                        <Link to="/order">Order</Link>
                        <Link to="/login">Login</Link>
                    </ul>
                </li>

                <li>
                    <h1 className="footer-header">Contact</h1>
                    <ul className="footer-links">
                        <li>2395 Maldove Street,</li>
                        <li>Chicago Illinois</li>
                        <br></br>
                        <li>(312)-867-5309</li>
                        <br></br>
                        <a
                            href="mailto: info@littlelemon.com"
                            target="_blank"
                            rel="noreferrer"
                        >info@littlelemon.com</a>
                    </ul>
                </li>
                <li>
                    <h1 className="footer-header">Connect</h1>
                    <ul className="footer-links">
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                        >Instagram</a>
                        <a
                            href="https://www.youtube.com/"
                            target="_blank"
                            rel="noreferrer"
                        >Join us!</a>
                    </ul>
                </li>
            </menu>
        </footer>
    );
}