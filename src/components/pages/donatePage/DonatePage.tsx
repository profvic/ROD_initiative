import DonateHero from "./DonateHero";
import Navbar from "../../navbar";
import Footer from "../../Footer";

export default function DonatePage() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <DonateHero />
            <Footer />
        </div>
    );
}