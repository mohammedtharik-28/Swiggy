import SwiggyLogo from '../assets/swiggylogo.png';
import { Link } from 'react-router-dom';



function Navbar() {
    return (
        <div className="bg-[#FF5200] flex items-center justify-between px-30 py-3  ">
            <div>
               <Link to="/"><img className="h-18 w-48" src={SwiggyLogo} alt="Logo" /></Link>
            </div>
            <div>
                <Link to="/about" className="text-white font-bold hover:none m-5">Swiggy Corporate</Link>
                <Link to="/partner" className="text-white  font-bold hover:none m-5">Partner With Us</Link>
                <button className="bg-[#FF5200]  font-bold text-white border border-white px-8 py-4 rounded-2xl cursor-pointer m-5">Get the App <i class="fa-solid fa-arrow-up-right"></i></button>
                <button className="bg-black text-white font-bold px-10 py-4 rounded-2xl cursor-pointer m-5">Sign Up</button>
            </div>
        </div>
    );
}

export default Navbar;