import './signupform.css';
import { Upload } from 'lucide-react';
export default function SignupForm() {
    return (
    <div className="image">
        
    <div className="form-container">
      
      
      <form className="volunteer-form">
      <h1>Become a volunteer!</h1>
      <p>It's our utmost pleasure to welcome you onboard</p>

      <h2>Personal Information</h2>
        <div className="input-group">
          <label>Full Name</label>
          <input type="text" placeholder="E.g. Constance Wanyanwu" />
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <input type="email" placeholder="E.g. constance@gmail.com" />
        </div>

        <div className="input-group">
          <label>Location</label>
          <input type="text" placeholder="E.g. isiokpo, Rivers State" />
        </div>

        <div className="input-group">
          <label>Phone Number</label>
          <input type="tel" placeholder="E.g. +234XXXXXXXXXX" />
        </div>

        <div>
  <label className="block text-gray-700 font-medium skills">Skills/Interest</label>
  <div className="flex flex-wrap gap-2">
    {["Teaching", "Event Planning", "Public Speaking", "Graphic Design", "Social Media Management", "Videography/Photography", "Others"].map((skill) => (
      <label key={skill} className="border border-gray-300 px-4 py-2 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100 transition">
        <input type="checkbox" className="hidden" />
        {skill}
      </label>
    ))}
  </div>
</div>

<div>
  <label className="block text-gray-700 font-medium availability">Availability</label>
  <div className="flex flex-wrap gap-2">
    {["Weekly", "Monthly", "Flexible", "One-Time Event"].map((availability) => (
      <label key={availability} className="border border-gray-300 px-4 py-2 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100 transition">
        <input type="checkbox" className="hidden" />
        {availability}
      </label>
    ))}
  </div>
</div>

<div>
  <label className="block text-gray-700 font-medium experience">Volunteer Experience</label>
  <div className="flex flex-wrap gap-4">
    {["No", "Yes"].map((experience) => (
      <label key={experience} className="border border-gray-300 px-4 py-2 onclick:bg-green-300 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100 transition">
        <input type="checkbox" className="hidden" />
        {experience}
      </label>
    ))}
  </div>
</div>

        <div className='upload'>
          <label className="block text-gray-700 font-medium">Upload CV (Optional)</label>
          <label className="border border-gray-300 rounded-lg p-4 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition">
            <Upload className="w-6 h-4 mr-2" />
            Click here to upload
            <input type="file" className="hidden" />
          </label>
        </div>

        <button type="submit" className="submit-button">Submit</button>
        
      </form>
      <div className="bgimage">
            <img src='./image.png' />
        </div>
    
    </div>
    </div>
  );
};