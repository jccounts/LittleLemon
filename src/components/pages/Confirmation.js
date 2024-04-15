import HeroImage from "../../images/confimation-food.png";
import { Link } from "react-router-dom";
export default function Confirmation() {
    return (
        <header className="confirmation-header">
            <img
                className="confirmation-image"
                src={HeroImage}
                alt="Little Lemon Ingredients"
            ></img>
            <section className="reserve-header-text">
                <h1>Your Reservation is Confirmed!</h1>
                <h4>A confirmation message has been sent to your email.</h4>
                <h4>Thank you for dining with us!</h4>
            </section>

            <section className="redirect-buttons">
                <a
                    className="redirect-button"
                    href={require("../../images/logo-big.png")}
                    target="_blank"
                    rel="noreferrer"
                >Browse Menu</a>
                <Link className="redirect-button" to="/">
                    Home
                </Link>
            </section>
        </header>
    );
}