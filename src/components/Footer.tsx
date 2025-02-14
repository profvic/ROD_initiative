
import { Facebook, Linkedin, Instagram } from 'lucide-react';


export default function Footer() {
  return (
    <footer className="bg-[#292929] text-white flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left sm:justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img className="h-6 w-6 text-green-500" src='/ROD.png'/>
              <span className="ml-2 text-xl font-bold">ROD Initiative</span>
            </div>
            <p className="text-gray-400">
            Dedicated to unlocking potential through education, equality, and opportunity, transforming lives and communities across Africa.            </p>
            <p className="text-gray-400 mt-4">
            Follow Us on Social Media</p> 
            <div className='flex space-x-4 mt-4'>
            <Facebook color="#0000ff" />  <Linkedin color="#0000ff" />  <Instagram color="#ff0080" />  
            </div>
          </div>
          

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-4">
              <li><a href="#About" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#mission" className="text-gray-400 hover:text-white">Blogs</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white">Career</a></li>
              <li><a href="#donate" className="text-gray-400 hover:text-white">Our Team</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                Privacy Policy
              </li>
              <li className="flex items-center text-gray-400">
                Terms of use
              </li>
              <li className="flex items-center text-gray-400">
                Donation
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest projects and initiatives.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <hr className='border-stone-100 my-1 mt-8 max-width' />

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} RODInitiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}