
import { Link } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import './hero.css';

export default function Hero() {
  return (
    <div id="home" className="relative h-screen fade-in">
      <div 
        className="absolute inset-0 bg-cover bg-center backGroundImage">
        <div className="absolute inset-0 "></div>
      </div>
      
      <div className="relative h-full flex items-center justify-left px-4">
        <div id='hero-text-container' className="max-w-3xl ml-15">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Empowering <br/>  the <span className="font-bold greenText" style={{color:"#14A800"}}>Future of Africa</span>,<br /> One Child at a Time
          </h1>
          <p className="text-xl text-gray-200 mb-8 lg:w-96">
            Dedicated to unlocking potential through education, equality and opportunity, transforming lives and communities accross Africa
          </p>
          <Link
            to="/donate" id='donate-button'
            className="inline-block w-48 text-sm text-center  bg-[#14A800] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-green-700 transition-colors"
          >
            Donate
          </Link>
          <HashLink
            to="/signup#signup" id='volunteer-button'
            className="inline-block w-50 text-sm ml-4 bg-green-50 text-stone-500 px-8 py-3 rounded-md text-lg font-medium hover:bg-green-200 transition-colors "
          >
            Become a Volunteer
          </HashLink>
        </div>
      </div>
    </div>
  );
}