import DonateHero from "./DonateHero";
import Navbar from "../../navbar";
import Footer from "../../Footer";
import HowToDonate from "./HowToDonate";
import Testimonials from "./Testimonials";

export default function DonatePage() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <DonateHero />
            <HowToDonate />
            <Testimonials />
            <Footer />
        </div>
    );
}