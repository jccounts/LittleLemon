import React from "react";
import Entree from "../images/entree.png"
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <header>
            <section>
                <div>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes.</p>
                    <button>Reserve Table</button>
                </div>
                <div>
                    <img src={Entree} alt="Food" />
                </div>
            </section>
        </header>
    )
}

export default Header;
