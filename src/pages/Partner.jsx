import React from "react"; 
import partner from '../assets/partner.jpg'
import symbol from '../assets/Symbol.png'
import { Link } from "react-router-dom";


function Partner() {
    return (
    <section>
        <div>
            <img src={partner} alt="partner" className="w-full h-[400px] relative object-cover" />
            <div className="absolute top-1/5">
            <div>
                <img src={symbol} alt="symbol" className="h-[60px] w-[50px]" />
            </div>
            <div>
                <h1>
                    Get Started
                </h1>
                <div>
                    <p>Enter a mobile number or restaurant ID to continue</p>
                </div>
                <input type="text" placeholder="Enter Restuarant ID / Mobile Number" />
                <button>Continue</button>
                <p>By logging in, I agree to Swiggy's <Link>terms & conditions</Link></p>
            </div>
            </div>
        </div>
    </section>
)
}

export default Partner;