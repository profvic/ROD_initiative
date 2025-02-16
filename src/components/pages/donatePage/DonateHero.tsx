import './donate.css';

export default function DonateHero() {
  return (
    <div id="donate" className='relative h-[655px] py-0' >
      <div 
      className="absolute inset-0 h-screen bg-cover bg-center relative donate-hero">
      </div>
        <div className="absolute inset-0 z-10 py-40 text-center items-center mt-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Your Support <br /> Empowers <span style={{color:"#14A800"}}>Change</span></h1>
          <p id='donate-hero-p' className="text-gray-300 text-xl">Dedicated to unlocking potential through education, equality, and <br /> opportunity, transforming lives and communities across Africa.</p>
        </div>
    </div>
  );
}