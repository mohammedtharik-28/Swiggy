import { useEffect, useState } from "react";
import partner from "../assets/partner.jpg";
import symbol from "../assets/Symbol.png";
import { Link } from "react-router-dom";

const slides = [
    {
        first: "Increase your online",
        second: "orders",
    },
    {
        first: "Reach customers far",
        second: "away from you",
    },
    {
        first: "Access to Swiggy tools",
        second: "and support",
    },
];

function Partner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeTab, setActiveTab] = useState("delivery");

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => {
                return (prev + 1) % slides.length;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const [restaurantId, setRestaurantId] = useState("");
    const [focused, setFocused] = useState(false);

    return (
        <section className="w-full">
            <div className="relative h-[420px] w-full overflow-hidden">
                <img src={partner} alt="partner" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 mx-auto flex h-full max-w-[1160px] items-center justify-evenly px-28">
                    <div className="w-[48%] text-white">
                        <img src={symbol} alt="symbol" className="mb-2 h-[60px] w-[50px] brightness-0 invert" />
                        <p className="text-sm font-semibold tracking-[2px]">
                            PARTNER WITH SWIGGY!
                        </p>
                        <div className="mt-2 h-[3px] w-[85px] bg-[#FF5200]"></div>
                        <h1 key={currentSlide} className="mt-5 max-w-[450px] text-4xl font-bold leading-tight">
                            {slides[currentSlide].first}
                            <br />
                            {slides[currentSlide].second}
                        </h1>
                        <div className="mt-5 flex items-center">
                            <div className={`h-1 rounded-l-full transition-all duration-300 ${currentSlide === 0 ? "w-7 bg-white rounded-full" : "w-7 bg-gray-500"}`}></div>
                            <div className={`h-1 transition-all duration-300 ${currentSlide === 1 ? "w-7 bg-white rounded-full" : "w-7 bg-gray-500"}`}></div>
                            <div className={`h-1 rounded-r-full transition-all duration-300 ${currentSlide === 2 ? "w-7 bg-white rounded-full" : "w-7 bg-gray-500"}`}></div>
                        </div>
                    </div>
                    <div className="w-[380px] rounded-[22px] bg-white p-6 shadow-2xl">
                        <h1 className="text-2xl font-bold text-[#243B5A]">
                            Get Started
                        </h1>
                        <p className="mt-7 text-[13px] font-medium leading-4 text-gray-500">
                            Enter a mobile number or restaurant ID
                            <br />
                            to continue
                        </p>
                        <div className="relative">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={restaurantId}
                                    onChange={(e) => setRestaurantId(e.target.value)}
                                    onFocus={() => setFocused(true)}
                                    onBlur={() => setFocused(false)}
                                    className=" h-[55px] w-full rounded-[20px] border border-gray-300 px-6 mt-3 text-sm text-[#243B5A] outline-none focus:border-[#FF2000]"
                                />
                                <label
                                    className={`pointer-events-none absolute left-5 font-medium transition-all duration-300 ${focused || restaurantId
                                            ? "-top-0  bg-white px-1 text-xs text-[#FF2000]"
                                            : "top-1/2 -translate-y-1/2 text-md text-gray-500"
                                        }`}>
                                        Enter Restaurant ID / Mobile number
                                </label>
                            </div>

                            <button
                                disabled={!restaurantId}
                                className={`mt-8 h-[56px] w-full rounded-[6px] text-lg font-bold text-white transition ${restaurantId
                                        ? "cursor-pointer bg-[#FF2000] hover:bg-[#e61c00]"
                                        : "cursor-not-allowed bg-[#d1d2d6]"
                                    }`}>
                                Continue
                            </button>
                        </div>
                        <p className="mt-5 text-center text-xs font-medium text-gray-500">
                            By logging in, I agree to Swiggy's{" "}
                            <Link to="/terms" className="font-semibold text-[#243B5A] underline hover:text-gray-500">
                                terms & conditions
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative z-20 ml-50 -mt-[30px] w-[500px] max-w-[90%] rounded-full border-1 border-white bg-[#f0f1f7] p-1 shadow-lg">
                <div className="flex">
                    <button
                        onClick={() => setActiveTab("delivery")}
                        className={`w-1/2 rounded-full py-2 text-lg font-bold cursor-pointer transition-all duration-300 ${activeTab === "delivery"
                                ? "bg-black text-white"
                                : "text-[#243B5A]"
                            }`}
                    >
                        Food Delivery
                    </button>
                    <button
                        onClick={() => setActiveTab("dineout")}
                        className={`w-1/2 rounded-full py-2 text-lg font-bold cursor-pointer transition-all duration-300 ${activeTab === "dineout"
                                ? "bg-black text-white"
                                : "text-[#243B5A]"
                            }`}
                    >
                        Dineout
                    </button>
                </div>
            </div>
            <section className="mx-auto max-w-[1160px] px-5 pb-16 pt-10">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    <div>
                        {activeTab === "delivery" ? (
                            <>
                                <p className="text-md font-medium text-gray-500">
                                    In just 3 easy steps
                                </p>
                                <h2 className="text-xl font-bold text-[#243B5A]">
                                    Get your restaurant delivery-ready in 24hrs!
                                </h2>
                                <div className="mt-4 h-[4px] w-11 rounded-full bg-[#FF5200]"></div>
                                <div className="mt-4 rounded-[18px] bg-[#f0f0f5] p-7">
                                    <div className="flex gap-5">
                                        <div className="flex flex-col items-center">
                                            <div className="h-3 w-3 rounded-full bg-[#6746E8]"></div>
                                            <div className="h-13 w-[1px] bg-gray-300"></div>
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-gray-500">STEP 1</p>
                                            <h3 className="mt-1 text-lg font-bold text-[#243B5A]">
                                                Install the Swiggy Owner App
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="flex flex-col items-center">
                                            <div className="h-3 w-3 rounded-full bg-[#6746E8]"></div>
                                            <div className="h-14 w-[1px] bg-gray-300"></div>
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-gray-500">STEP 2</p>
                                            <h3 className="mt-1 text-lg font-bold text-[#243B5A]">
                                                Login/Register using your phone number
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="flex flex-col items-center">
                                            <div className="h-3 w-3 rounded-full bg-[#6746E8]"></div>
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-gray-500">STEP 3</p>
                                            <h3 className="mt-1 text-lg font-bold text-[#243B5A]">
                                                Enter restaurant details
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <p className="text-md font-medium text-gray-500">
                                    In just 3 easy steps
                                </p>
                                <h2 className="text-xl font-bold text-[#243B5A]">
                                    Get your restaurant discovered by millions of diners
                                </h2>
                                <div className="mt-4 h-[4px] w-11 rounded-full bg-[#FF5200]"></div>
                                <div className="mt-4 rounded-[18px] bg-[#f0f0f5] p-5">
                                    <div className="flex gap-5">
                                        <div className="flex flex-col items-center">
                                            <div className="h-3 w-3 rounded-full bg-[#6746E8]"></div>
                                            <div className="h-14 w-[1px] bg-gray-300"></div>
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-gray-500">STEP 1</p>
                                            <h3 className="mt-1 text-lg font-bold text-[#243B5A]">
                                                Click on “Show Interest”
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="flex flex-col items-center">
                                            <div className="h-3 w-3 rounded-full bg-[#6746E8]"></div>
                                            <div className="h-14 w-[1px] bg-gray-300"></div>
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-gray-500">STEP 2</p>
                                            <h3 className="mt-1 text-lg font-bold text-[#243B5A]">
                                                Enter your restaurant details and contact number
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="flex flex-col items-center">
                                            <div className="h-3 w-3 rounded-full bg-[#6746E8]"></div>
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-gray-500">STEP 3</p>
                                            <h3 className="mt-1 text-lg font-bold text-[#243B5A]">
                                                A DineOut Executive will reach out to you shortly!
                                            </h3>
                                        </div>
                                    </div>
                                    <button className="mt-8 h-[45px] w-full rounded-[15px] bg-[#FF5200] text-md font-bold text-white transition hover:bg-[#e64a00]">
                                        Show interest, I want to list restaurant
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-[#243B5A]">
                            For an easy form filling process,
                        </h3>
                        <p className="text-sm font-medium text-gray-600">
                            you can keep these documents handy.
                        </p>
                        <div className="my-5 border-t border-dashed border-gray-300"></div>
                        <ul className="space-y-3 text-md font-bold text-[#243B5A]">
                            <li className="flex gap-4">
                                <span className="text-[#FF5200]">•</span>
                                <span>
                                    FSSAI License copy
                                    <a href="#" className="ml-4 text-sm font-medium text-[#FF5200]">
                                        Apply Here
                                    </a>
                                </span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-[#FF5200]">•</span>
                                <span>Your Restaurant menu</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-[#FF5200]">•</span>
                                <span>Bank details</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-[#FF5200]">•</span>
                                <span>
                                    GSTIN
                                    <a href="#" className="ml-4 font-medium text-sm text-[#FF5200]">
                                        Apply Here
                                    </a>
                                </span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-[#FF5200]">•</span>
                                <span>PAN card copy</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Partner;