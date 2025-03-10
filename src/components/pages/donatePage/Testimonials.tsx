import './Testimonials.css';
export default function Testimonials() {
    return (
        <div id="testimonials" className="bg-[#fbfbfb] px-10 py-10">
            <h1 className="mb-10 text-4xl">See the difference you're making</h1>
            <div id='cardContainer' className="flex gap-4 sm:flex-row">
                {/* Card 1 */}
                <div id="tCard" className="flex-1 h-[342px] rounded-[20px] bg-white sm:w-full">
                    {/* Card 1 - Header*/}
                    <div className="h-[50px] flex items-center gap-4 justify-items-center ml-4 mt-4 text-left">
                    <img src="./avatar1.png" alt="Profile 1" className="h-[48px] w-[48px] rounded-full object-cover" />
                    <div>
                        <h1 className="font-bold">Emmanuel David</h1>
                        <p className="text-stone-300">SS1 Student at MSS</p>
                    </div>
                    </div>
                    <hr className='border-stone-100 my-1 mt-8 max-width' />
                    {/* Card 1 - Content */}
                    <p className="px-4 py-4 text-left text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    lorem adipiscing. Urna adipiscing a 
                    et malesuada facilisis odio. Ultricies pharetra at diam elit ut. Ante lorem 
                    nunc libero a porttitor enim urna
                    dapibus massa. Vulputate ornare sed neque augue. 
                    </p>
                </div>
                {/* Card 2 */}
                <div id="tCard" className="flex-1 h-[342px] rounded-[20px] bg-white sm:w-full">
                    {/* Card 2 - Header */}
                    <div className="h-[50px] flex items-center gap-4 justify-items-center ml-4 mt-4 text-left">
                    <img src="./avatar2.png" alt="Profile 1" className="h-[48px] w-[48px] rounded-full object-cover" />
                    <div>
                        <h1 className="font-bold">Emmanuel David</h1>
                        <p className="text-stone-300">SS1 Student at MSS</p>
                    </div>
                    </div>
                    <hr className='border-stone-100 my-1 mt-8 max-width' />
                    {/* Card 2 - Content*/}
                    <p className="px-4 py-4 text-left text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    lorem adipiscing. Urna adipiscing a 
                    et malesuada facilisis odio. Ultricies pharetra at diam elit ut. Ante lorem 
                    nunc libero a porttitor enim urna
                    dapibus massa. Vulputate ornare sed neque augue. 
                    </p>
                </div>
                {/* Card 3 */}
                <div id="tCard" className="flex-1 h-[342px] rounded-[20px] bg-white sm:w-full">
                    {/* Card 3 - Header */}
                    <div className="h-[50px] flex items-center gap-4 justify-items-center ml-4 mt-4 text-left">
                    <img src="./avatar3.png" alt="Profile 1" className="h-[48px] w-[48px] rounded-full object-cover" />
                    <div>
                        <h1 className="font-bold">Emmanuel David</h1>
                        <p className="text-stone-300">SS1 Student at MSS</p>
                    </div>
                    </div>
                    <hr className='border-stone-100 my-1 mt-8 max-width' />
                    {/* Card 3 - Content */}
                    <p className="px-4 py-4 text-left text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    lorem adipiscing. Urna adipiscing a 
                    et malesuada facilisis odio. Ultricies pharetra at diam elit ut. Ante lorem 
                    nunc libero a porttitor enim urna
                    dapibus massa. Vulputate ornare sed neque augue. 
                    </p>
                </div>
                {/* Card 4 */}
                <div id="tCard" className="flex-1 h-[342px] rounded-[20px] bg-white sm:w-full">
                     {/* Card 4 - Header */}
                    <div className="h-[50px] flex items-center gap-4 justify-items-center ml-4 mt-4 text-left">
                    <img src="./avatar4.png" alt="Profile 1" className="h-[48px] w-[48px] rounded-full object-cover" />
                    <div>
                        <h1 className="font-bold">Emmanuel David</h1>
                        <p className="text-stone-300">SS1 Student at MSS</p>
                    </div>
                    </div>
                    <hr className='border-stone-100 my-1 mt-8 max-width' />
                    {/* Card 4 - Content */}
                    <p className="px-4 py-4 text-left text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    lorem adipiscing. Urna adipiscing a 
                    et malesuada facilisis odio. Ultricies pharetra at diam elit ut. Ante lorem 
                    nunc libero a porttitor enim urna
                    dapibus massa. Vulputate ornare sed neque augue. 
                    </p>
                </div>

            </div>

        </div>
    );
}