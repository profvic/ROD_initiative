
import { GraduationCap, Users, HandCoins } from "lucide-react";
import './programs.css';

export default function Programs() {
    return (
      <section id="programs" className="py-20 bg-[#033201] fade-scale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="program-flex" className="flex items-center space-x-8">
            {/* Text Section */}
            <div id="program-text" className="w-1/2">
              <h2 id="program-text-h2" className="text-[48px] font-bold text-[#0BF78F] mb-4">Programs/Initiatives</h2>
              <p id="program-text-p" className="text-[20px] text-white">
              Our initiatives at ROD Africa Initiative are designed to create lasting change and open doors of opportunity for young Africans. Here’s how we’re making a difference:
              </p>
            </div>
  
            {/* Image Section */}
            <div id="program-cards" className="w-1/2">
              <div className="max-w-sm mx-auto width-[554px] height-[440px] bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center space-x-4 mb-4 bg-[#F8F9F8] rounded-lg shadow-lg">
                <GraduationCap className="w-10 h-10 text-black-600" />
                <span className="text-[black] text-[18px]">Education Access Program<br /><p className ="text-[16px] text-[#525252]">Detail efforts to promote quality education and support rural schools.</p></span>
                
                    </div>
                    <div className="flex items-center space-x-4 mb-4 bg-[#F8F9F8] rounded-lg shadow-lg">
                <Users className="w-10 h-10 text-black-600" />
                <span className="text-[black] text-[18px]">Education Access Program<br /><p className ="text-[16px] text-[#525252]">Detail efforts to promote quality education and support rural schools.</p></span>
                
                    </div>
                    <div className="flex items-center space-x-4 mb-4 bg-[#F8F9F8] rounded-lg shadow-lg">
                <HandCoins className="w-10 h-10 text-black-600" />
                <span className="text-[black] text-[18px]">Education Access Program<br /><p className ="text-[16px] text-[#525252]">Detail efforts to promote quality education and support rural schools.</p></span>
                
                    </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    );
  }
  