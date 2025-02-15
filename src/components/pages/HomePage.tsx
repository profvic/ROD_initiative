import About from "../About";
import Events from "../Events";
import Footer from "../Footer";
import Hero from "../Hero";
import Navbar from "../navbar";
import Programs from "../programs";

export default function HomePage(){
    return(
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <Programs />
            <Events />
            <Footer />
        </div>
    );
}