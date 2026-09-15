import food1 from '../assets/food1.png'
import instamart from '../assets/Instamart.png'
import dineout from '../assets/Dineout.png'
import useState from 'react'



function Hero() {
    return (
        <div className="bg-[#FF5200] h-screen">
            <div className="flex p-15 justify-center">
                <div>
                    <h1 className="text-white text-5xl w-190 leading-tight text-center font-bold mb-8 ml-5">Order food & groceries. Discover best restaurants. Swiggy it!</h1>
                    <div className='flex gap-5 max-w-5xl mx-auto'>
                        <div className='bg-white rounded-2xl h-[60px] flex items-center px-3 w-[37%]'>
                            <i className="fa-solid fa-location-dot text-[#ff5200] text-2xl mx-1 "></i>
                            <input type="text" placeholder="Enter your delivery location" className="bg-white py-4 mr-3 ms-1 flex-1 outline-none placeholder:text-gray-400 font-small caret-[#ff5200] caret-width-2px" />
                            <i className="fa-solid fa-chevron-down text-gray-700 text-lg me-2"></i>
                        </div>
                        <div className="bg-white rounded-2xl h-[60px] flex items-center px-4 flex-1">

                            <input
                                type="text"
                                placeholder="Search for restaurant, item or more"
                                className="flex-1 outline-none text-lg font-medium placeholder:text-gray-500"
                            />

                            <i className="fa-solid fa-magnifying-glass text-gray-500 text-md"></i>

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex p-8 justify-center gap-12">
                <div className="bg-white p-7 w-90 h-80 rounded-4xl shadow-lg">
                    <h1 className="text-4xl font-bold text-black text-gray-700">FOOD DELIVERY</h1>
                    <h1 className="text-2xl font-semibold text-black text-gray-500">FROM RESTAURANTS</h1>
                    <h1 className="text-lg font-bold text-[#FF5200] text-[#FF5200]-200">UP TO 60% OFF</h1>
                    <div className="flex items-center justify-between mt-12 ">
                        <button className="bg-[#FF5200]  text-white w-12 h-12 rounded-full"><i className='fa-solid fa-arrow-right text-3xl'></i></button>
                        <img src={food1} alt="food1" className="w-40 h-38 " />
                    </div>
                </div>
                <div className="bg-white p-7 w-90 h-80 rounded-4xl shadow-lg">
                    <h1 className="text-4xl font-bold text-black text-gray-700">INSTAMART</h1>
                    <h1 className="text-2xl  font-semibold text-black text-gray-500">INSTANT GROCERY</h1>
                    <h1 className="text-lg font-bold text-[#FF5200] text-[#FF5200]-200">UP TO 60% OFF</h1>
                    <div className="flex items-center justify-between mt-12 ">
                        <button className="bg-[#FF5200]  text-white w-12 h-12 rounded-full"><i className='fa-solid fa-arrow-right text-3xl'></i></button>
                        <img src={instamart} alt="food2" className="w-40 h-38 " />
                    </div>
                </div>
                <div className="bg-white p-7 w-90 h-80 rounded-4xl shadow-lg">
                    <h1 className="text-4xl font-bold text-black text-gray-700">DINEOUT</h1>
                    <h1 className="text-2xl font-semibold text-black text-gray-500">EAT OUT & SAVE MORE</h1>
                    <h1 className="text-lg font-bold text-[#FF5200] text-[#FF5200]-200">UP TO 50% OFF</h1>
                    <div className="flex items-center justify-between mt-12 ">
                        <button className="bg-[#FF5200]  text-white w-12 h-12 rounded-full"><i className='fa-solid fa-arrow-right text-3xl'></i></button>
                        <img src={dineout} alt="food1" className="w-40 h-38 " />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;