import Navbar from './components/navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Footer from './components/Footer';
import Programs from './components/programs';

function App() {
 

  return (
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

export default App
