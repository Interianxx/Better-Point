import HeroSection from "../HeroSection.jsx";
import "../HeroSection.css"
import Cards from "../Cards.jsx";
import "../Cards.css"
import "../../App.css"
import Footer from "../Footer.jsx";

const Home = () => {
    return (
        <>
        <HeroSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;