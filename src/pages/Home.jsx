import Food from "../components/Food";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home(){
    return (
        <>
        <Navbar />
        <Hero/>
        <Food/>
        <Footer />
        </>
    );
}

export default Home;