
import Footer from "../../Footer";
import Navbar from "../../navbar";
import SignupForm from "./signupform";

export default function Signup(){
    return(
        <div className="min-h-screen">
            <Navbar />
            <SignupForm />
            <Footer />
        </div>
    );
}