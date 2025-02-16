import { ArrowRight } from "lucide-react";
import './howToDonate.css'

export default function HowToDonate(){
    return(
            <div id="how-to-donate" className="px-10 mt-4 py-10">
                <h1 className="text-4xl mb-6">How you can donate</h1>
                <div id="HTDContainer" className="flex gap-4 text-left text-black">
                    <div id="one-time-donation" className="h-[280px] text-black bg-[#f8f9f8] py-10 px-10 flex-1 rounded-[20px] mb-2 hover:bg-green-200 transition-colors">
                        <h1 className="text-2xl mb-2">One Time Donation</h1>
                        <p className="mb-2">A one-time donation allows you to make an 
                            immediate impact, supporting ROD Africa Initiative’s programs 
                            and providing essential resources to empower young Africans.</p>
                        <a href="" className="flex gap-2">Proceed <ArrowRight /></a>
                    </div>
                    <div id="monthly-donation" className="text-left flex-1 h-[280px] text-white bg-[#033201] py-10 px-10 rounded-[20px] mb-2 hover:bg-green-700 transition-colors">
                        <h1 className="text-2xl mb-2">Monthly Donation</h1>
                        <p className="mb-2">A monthly donation provides sustained support, 
                            ensuring our programs continue to grow and make a lasting difference.</p>
                        <a href="" className="flex gap-2"><span className="text-[#73fe58]" >Proceed</span> <ArrowRight /></a>

                    </div>
                </div>
            </div>

    );
}