// import Carousel from './SpecialsCarousel';
import GreekSalad from '../../images/greek-salad.jpg';
import Bread from '../../images/bruchetta.png';
import LemonDessert from '../../images/lemon-cake.jpg';
import SpecialCard from './SpecialCard';

export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>Weekly Specials</h1>
            </article>

            <section className="specials-cards">
                <SpecialCard image={GreekSalad} name="Greek Salad" price="$12.99" description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
                 Dressed with salt, hot pepper, and olive oil."/>
                <SpecialCard image={Bread} name="Bruschetta" price="$16.99" description="Toasted bread, topped with tomato, prosciutto, and cheese.
                Seasoned with salt and olive oil."/>
                <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$8.50" description="Fresh baked lemon bread coated in salt and sugar.
                Powdered in citrus and lemon zest. Everyone is going to love it!"/>
            </section>

        </section>
    );
}
