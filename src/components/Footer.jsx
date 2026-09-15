import swiggylogo2 from "../assets/swiggylogo2.png";
import AppStore from "../assets/AppStore.png";
import GooglePlay from "../assets/GooglePlay.png";

import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer className="bg-gray-200 py-15">
            <div className="container mx-auto ps-55 pe-45 grid md:grid-cols-5 gap-2">
                <div>
                    <img src={swiggylogo2} alt="SwiggyLogo" className="w-40 py-3" />
                    <p className="text-gray-500 font-bold text-sm">&copy; {new Date().getFullYear()} Swiggy Limited</p>
                </div>
                <div>
                    <h2 className="mb-4 text-lg font-bold text-black">
                        Company
                    </h2>
                    <ul className="space-y-3">
                        <li>
                            <Link
                                to="/about"
                                className="text-gray text-gray-600"
                            >
                                About Us
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/corporate"
                                className="text-gray text-gray-600"
                            >
                                Swiggy Corporate
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/careers"
                                className="text-gray text-gray-600"
                            >
                                Careers
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/team"
                                className="text-gray text-gray-600"
                            >
                                Team
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/swiggy-one"
                                className="text-gray text-gray-600"
                            >
                                Swiggy One
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/instamart"
                                className="text-gray text-gray-600"
                            >
                                Swiggy Instamart
                            </Link>
                        </li>

                    </ul>
                </div>
                <div>
                    <h2 className="mb-4 text-lg font-bold text-black">
                        Contact US
                    </h2>

                    <ul className="space-y-3">

                        <li>
                            <Link
                                to="/about"
                                className="text-gray text-gray-600"
                            >
                                Help & Support
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/corporate"
                                className="text-gray text-gray-600"
                            >
                                Partner With Us
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/careers"
                                className="text-gray text-gray-600"
                            >
                                Ride With Us
                            </Link>
                        </li>
                    </ul>
                    <h2 className="mb-4 mt-20 text-lg font-bold text-black">
                        Legal
                    </h2>

                    <ul className="space-y-3">

                        <li>
                            <Link
                                to="/about"
                                className="text-gray text-gray-600"
                            >
                                Terms & <br />Conditions
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/corporate"
                                className="text-gray text-gray-600"
                            >
                                Cookie Policy
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/careers"
                                className="text-gray text-gray-600"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-4 text-lg font-bold text-black">
                        Available in
                    </h2>

                    <ul className="space-y-3">

                        <li>
                            <Link
                                to="/about"
                                className="text-gray text-gray-600"
                            >
                                Bangalore
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/corporate"
                                className="text-gray text-gray-600"
                            >
                                Gurgaon
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/careers"
                                className="text-gray text-gray-600"
                            >
                                Hyderabad
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/team"
                                className="text-gray text-gray-600"
                            >
                                Delhi
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/swiggy-one"
                                className="text-gray text-gray-600"
                            >
                                Mumbai
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/instamart"
                                className="text-gray text-gray-600"
                            >
                                Pune
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-4 text-lg font-bold text-black">
                        Life at Swiggy
                    </h2>

                    <ul className="space-y-3">

                        <li>
                            <Link
                                to="/about"
                                className="text-gray text-gray-600"
                            >
                                Explore with swiggy
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/corporate"
                                className="text-gray text-gray-600"
                            >
                                Swiggy News
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/careers"
                                className="text-gray text-gray-600"
                            >
                                Snackables
                            </Link>
                        </li>
                    </ul>
                    <h2 className="mb-4 mt-32 text-lg font-bold text-black">
                        Social Links
                    </h2>

                    <ul className="space-y-3 flex flex-row gap-4">

                        <li>
                            <Link
                                to="/about"
                                className="text-gray text-gray-600 text-xl"
                            >
                                <i className="fa-brands fa-linkedin"></i>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/corporate"
                                className="text-gray text-gray-600 text-xl"
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/careers"
                                className="text-gray text-gray-600 text-xl"
                            >
                                <i className="fa-brands fa-facebook-f"></i>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/careers"
                                className="text-gray text-gray-600 text-xl"
                            >
                                <i className="fa-brands fa-pinterest"></i>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/careers"
                                className="text-gray text-gray-600 text-xl"
                            >
                                <i className="fa-brands fa-x-twitter"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <hr className="mx-18 my-12 text-gray-500" />

            <div className="flex items-center justify-center">
                <h1 className="font-bold text-2xl text-gray-800">For better experience, download the Swiggy app now</h1>
                <img className="w-50 ms-4 transition hover:105" src={AppStore} alt="AppStore" />
                <img className="w-55 h-25 ms-4" src={GooglePlay} alt="GooglePlay" />
            </div>
        </footer>
    );
}

export default Footer;