import Heading from "../sections/Heading";
 import Specials from "../sections/Specials";
// import Testimonials from "../sections/headingPages/Testimonials";
// import About from "../sections/headingPages/About";
export default function Homepage() {
    return (
        <>
            <Heading />
            <main>
                <Specials />
                {/*<Testimonials />*/}
                {/*<About />*/}
            </main>
        </>
    );
}