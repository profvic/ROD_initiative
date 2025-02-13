
import './hero.css';

export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center backGroundImage">
        <div className="absolute inset-0 "></div>
      </div>
      
      <div className="relative h-full flex items-center justify-left text-left px-4">
        <div className="max-w-3xl ml-15">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Empowering <br/>  the <span className="font-bold greenText" style={{color:"#14A800"}}>Future of Africa</span>,<br /> One Child at a Time
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Dedicated to unlocking potential through education,<br /> equality and opportunity, transforming lives and<br /> communities accross Africa
          </p>
          <a
            href="#donate"
            className="inline-block w-48 text-sm text-center  bg-[#14A800] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-green-700 transition-colors"
          >
            Donate
          </a>
          <a
            href="#donate"
            className="inline-block w-48 text-sm ml-4 bg-green-50 text-stone-500 px-8 py-3 rounded-md text-lg font-medium hover:bg-green-200 transition-colors "
          >
            Become a Volunteer
          </a>
        </div>
      </div>
    </div>
  );
}