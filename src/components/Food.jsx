import { useRef } from "react";

import food1 from "../assets/food1.png";

import idli from "../assets/food/Idli.png";
import vada from "../assets/food/Vada.png";
import salad from "../assets/food/Salad.png";
import khichdi from "../assets/food/Pongal.png";
import pongal from "../assets/food/Pongal.png";
import omelette from "../assets/food/Omelette.png";
import dosa from "../assets/food/Dosa.png";
import appam from "../assets/food/Appam.png";
import poori from "../assets/food/Poori.png";
import puttu from "../assets/food/Puttu.png";
import cake from "../assets/food/Cake.png";
import paratha from "../assets/food/Paratha.png";
import biryani from "../assets/food/Biryani.png";
import shake from "../assets/food/Shake.png";
import juice from "../assets/food/Juice.png";
import pancake from "../assets/food/Pancake.png";
import uthappam from "../assets/food/Uthappam.png";
import coffee from "../assets/food/Coffee.png";
import parotta from "../assets/food/Parotta.png";
import paniyaram from "../assets/food/Paniyaram.png";

import freshVegetables from '../assets/Instamart/freshVegetables.png'
import freshFruits from '../assets/Instamart/freshFruits.png'
import breadAndMilk from '../assets/Instamart/Bread.png'
import masala from '../assets/Instamart/Masala.png'
import oilAndGhee from '../assets/Instamart/OilAndGhee.png'
import munchies from '../assets/Instamart/Munchies.png'
import sweets from '../assets/Instamart/Sweets.png'
import riceAndAtta from '../assets/Instamart/Rice.png'
import biscuits from '../assets/Instamart/Biscuits.png'
import juices from '../assets/Instamart/Juice.png'
import frozen from '../assets/Instamart/FrozenFood.png'
import meat from '../assets/Instamart/Meat.png'
import cereals from '../assets/Instamart/Cereals.png'
import spreads from '../assets/Instamart/Spreads.png'
import tea from '../assets/Instamart/Tea.png'
import cleaners from '../assets/Instamart/Cleaners.png'
import pharma from '../assets/Instamart/Pharma.png'
import hair from '../assets/Instamart/Hair.png'
import paan from '../assets/Instamart/Paan.png'
import home from '../assets/Instamart/Home.png'
import office from '../assets/Instamart/Office.png'
import baby from '../assets/Instamart/Baby.png'
import pet from '../assets/Instamart/Pet.png'
import beauty from '../assets/Instamart/Beauty.png'


import { Link } from "react-router-dom";

function Food() {
    const foodItems = [
        {
            id: 1,
            name: "Idli",
            img: idli
        },
        {
            id: 2,
            name: "Salad",
            img: salad
        },
        {
            id: 3,
            name: "Vada",
            img: vada
        },
        {
            id: 4,
            name: "Appam",
            img: appam
        },
        {
            id: 5,
            name: "Pongal",
            img: pongal
        },
        {
            id: 6,
            name: "Omelette",
            img: omelette
        },
        {
            id: 7,
            name: "Dosa",
            img: dosa
        },
        {
            id: 8,
            name: "Khichdi",
            img: khichdi
        },
        {
            id: 9,
            name: "Poori",
            img: poori
        },
        {
            id: 10,
            name: "Paratha",
            img: paratha
        },
        {
            id: 11,
            name: "Biryani",
            img: biryani
        },
        {
            id: 12,
            name: "Puttu",
            img: puttu
        },
        {
            id: 13,
            name: "Cake",
            img: cake
        },
        {
            id: 14,
            name: "Shake",
            img: shake
        },
        {
            id: 15,
            name: "Juice",
            img: juice
        },
        {
            id: 16,
            name: "pancake",
            img: pancake
        },
        {
            id: 17,
            name: "Uthappam",
            img: uthappam
        },
        {
            id: 18,
            name: "coffee",
            img: coffee
        },
        {
            id: 19,
            name: "Parotta",
            img: parotta
        },
        {
            id: 20,
            name: "Paniyaram",
            img: paniyaram
        }
    ];

    const groseriesItems = [
        {
            id: 1,
            name: "Fresh Vegetables",
            img: freshVegetables
        },
        {
            id: 2,
            name: "Fresh Fruits",
            img: freshFruits
        },
        {
            id: 3,
            name: "Dairy, Bread and Eggs",
            img: breadAndMilk
        },
        {
            id: 4,
            name: "Rice, Atta and Dals",
            img: riceAndAtta
        },
        {
            id: 5,
            name: "Masalas and Dry Fruits",
            img: masala
        },
        {
            id: 6,
            name: "Oils and Ghee",
            img: oilAndGhee
        },
        {
            id: 7,
            name: "Munchies",
            img: munchies
        },
        {
            id: 8,
            name: "Sweet Tooth",
            img: sweets
        },
        {
            id: 9,
            name: "Cold Drinks and Juices",
            img: juices
        },
        {
            id: 10,
            name: "Biscuit and Cakes",
            img: biscuits
        }, {
            id: 11,
            name: "Instant and Frozen Food",
            img: frozen
        },
        {
            id: 12,
            name: "Meat and Seafood",
            img: meat
        },
        {
            id: 13,
            name: "Cereals and Breakfast",
            img: cereals
        },
        {
            id: 14,
            name: "Sauces and Spreads",
            img: spreads
        },
        {
            id: 15,
            name: "Tea, Coffee and More",
            img: tea
        },
        {
            id: 16,
            name: "Cleaning Essentials",
            img: cleaners
        },
        {
            id: 17,
            name: "Pharma and Hygiene",
            img: pharma
        },
        {
            id: 18,
            name: "Bath, Body and Hair",
            img: hair
        },
        {
            id: 19,
            name: "Paan Corner",
            img: paan
        },
        {
            id: 20,
            name: "Home and Kitchen",
            img: home
        },
        {
            id: 21,
            name: "Office and Electricals",
            img: office
        },
        {
            id: 22,
            name: "Baby Care",
            img: baby
        },
        {
            id: 23,
            name: "Pet Supplies",
            img: pet
        },
        {
            id: 24,
            name: "Beauty and Grooming",
            img: beauty
        },
    ];

    const DineoutItems = [
        {
            id: '1',
            name: 'The Garden Restaurant',
            cuisine: 'North Indian . South Indian',
            price: '$600 for two',
            rating: '4.3',
            location: 'Neelambur, Coimbatore',
            Distance: '15.4 km',
            Prebooking_offer: 'Flat 20% off on pre-booking',
            Bank_Offer: 'Up to 10% off with bank offers',
            Other_Offer: 'Get extra $100 off using PAYTMUPI'
        }, {
            id: '2',
            name: 'Hub House Cafe',
            cuisine: 'Italian . Continental',
            price: '$300 for two',
            rating: '4.3',
            location: 'Peelamedu, Coimbatore',
            Distance: '7.7 km',
            Prebooking_offer: 'Flat 20% off on pre-booking',
            Bank_Offer: 'Up to 10% off with bank offers',
            Other_Offer: 'Get extra $100 off using PAYTMUPI'
        }, {
            id: '3',
            name: 'Monkee Bar',
            cuisine: 'Finger Food . Chinese',
            price: '$2900 for two',
            rating: '4.3',
            location: 'Anaikatti, Coimbatore',
            Distance: '15.4 km',
            Prebooking_offer: 'Flat 25% off on pre-booking',
            Bank_Offer: 'Up to 10% off with bank offers',
            Other_Offer: 'Get extra $100 off using TRYNEW'
        }, {
            id: '4',
            name: 'Idly Virunthu',
            cuisine: 'South Indian . Indian',
            price: '$200 for two',
            rating: '4.3',
            location: 'New Siddhapudur, Coimbatore',
            Distance: '1.8 km',
            Prebooking_offer: 'Flat 10% off on pre-booking',
            Bank_Offer: 'Up to 10% off with bank offers',
            Other_Offer: 'Get extra $100 off using PAYTMUPI'
        },
        {
            id: '5',
            name: 'Me Meat and Eat',
            cuisine: 'Continental . Finger Food',
            price: '$400 for two',
            rating: '4.3',
            location: 'Vadavalli, Coimbatore',
            Distance: '15.4 km',
            Prebooking_offer: 'Flat 20% off on pre-booking',
            Bank_Offer: 'Up to 10% off with bank offers',
            Other_Offer: 'Get extra $100 off using PAYTMUPI'
        },
        {
            id: '6',
            name: 'The Garden Restaurant',
            cuisine: 'North Indian . South Indian',
            price: '$600 for two',
            rating: '4.3',
            location: 'Neelambur, Coimbatore',
            Distance: '15.4 km',
            Prebooking_offer: 'Flat 20% off on pre-booking',
            Bank_Offer: 'Up to 10% off with bank offers',
            Other_Offer: 'Get extra $100 off using PAYTMUPI'
        },
        {
            id: '7',
            name: 'The Garden Restaurant',
            cuisine: 'North Indian . South Indian',
            price: '$600 for two',
            rating: '4.3',
            location: 'Neelambur, Coimbatore',
            Distance: '15.4 km',
            Prebooking_offer: 'Flat 20% off on pre-booking',
            Bank_Offer: 'Up to 10% off with bank offers',
            Other_Offer: 'Get extra $100 off using PAYTMUPI'
        },
        {
            id: '8',
            name: 'The Garden Restaurant',
            cuisine: 'North Indian . South Indian',
            price: '$600 for two',
            rating: '4.3',
            location: 'Neelambur, Coimbatore',
            Distance: '15.4 km',
            Prebooking_offer: 'Flat 20% off on pre-booking',
            Bank_Offer: 'Up to 10% off with bank offers',
            Other_Offer: 'Get extra $100 off using PAYTMUPI'
        },
        {
            id: '9',
            name: 'The Garden Restaurant',
            cuisine: 'North Indian . South Indian',
            price: '$600 for two',
            rating: '4.3',
            location: 'Neelambur, Coimbatore',
            Distance: '15.4 km',
            Prebooking_offer: 'Flat 20% off on pre-booking',
            Bank_Offer: 'Up to 10% off with bank offers',
            Other_Offer: 'Get extra $100 off using PAYTMUPI'
        },
        {
            id: '10',
            name: 'The Garden Restaurant',
            cuisine: 'North Indian . South Indian',
            price: '$600 for two',
            rating: '4.3',
            location: 'Neelambur, Coimbatore',
            Distance: '15.4 km',
            Prebooking_offer: 'Flat 20% off on pre-booking',
            Bank_Offer: 'Up to 10% off with bank offers',
            Other_Offer: 'Get extra $100 off using PAYTMUPI'
        },
        {
            id: '11',
            name: 'The Garden Restaurant',
            cuisine: 'North Indian . South Indian',
            price: '$600 for two',
            rating: '4.3',
            location: 'Neelambur, Coimbatore',
            Distance: '15.4 km',
            Prebooking_offer: 'Flat 20% off on pre-booking',
            Bank_Offer: 'Up to 10% off with bank offers',
            Other_Offer: 'Get extra $100 off using PAYTMUPI'
        },
        {
            id: '12',
            name: 'The Garden Restaurant',
            cuisine: 'North Indian . South Indian',
            price: '$600 for two',
            rating: '4.3',
            location: 'Neelambur, Coimbatore',
            Distance: '15.4 km',
            Prebooking_offer: 'Flat 20% off on pre-booking',
            Bank_Offer: 'Up to 10% off with bank offers',
            Other_Offer: 'Get extra $100 off using PAYTMUPI'
        },
        {
            id: '13',
            name: 'The Garden Restaurant',
            cuisine: 'North Indian . South Indian',
            price: '$600 for two',
            rating: '4.3',
            location: 'Neelambur, Coimbatore',
            Distance: '15.4 km',
            Prebooking_offer: 'Flat 20% off on pre-booking',
            Bank_Offer: 'Up to 10% off with bank offers',
            Other_Offer: 'Get extra $100 off using PAYTMUPI'
        },
        {
            id: '14',
            name: 'The Garden Restaurant',
            cuisine: 'North Indian . South Indian',
            price: '$600 for two',
            rating: '4.3',
            location: 'Neelambur, Coimbatore',
            Distance: '15.4 km',
            Prebooking_offer: 'Flat 20% off on pre-booking',
            Bank_Offer: 'Up to 10% off with bank offers',
            Other_Offer: 'Get extra $100 off using PAYTMUPI'
        },
        {
            id: '15',
            name: 'The Garden Restaurant',
            cuisine: 'North Indian . South Indian',
            price: '$600 for two',
            rating: '4.3',
            location: 'Neelambur, Coimbatore',
            Distance: '15.4 km',
            Prebooking_offer: 'Flat 20% off on pre-booking',
            Bank_Offer: 'Up to 10% off with bank offers',
            Other_Offer: 'Get extra $100 off using PAYTMUPI'
        },
        {
            id: '16',
            name: 'The Garden Restaurant',
            cuisine: 'North Indian . South Indian',
            price: '$600 for two',
            rating: '4.3',
            location: 'Neelambur, Coimbatore',
            Distance: '15.4 km',
            Prebooking_offer: 'Flat 20% off on pre-booking',
            Bank_Offer: 'Up to 10% off with bank offers',
            Other_Offer: 'Get extra $100 off using PAYTMUPI'
        }
    ]

    const foodSliderRef = useRef(null);

    const scrollLeft = () => {
        foodSliderRef.current.scrollBy({
            left: -700,
            behavior: "smooth"
        });
    };

    const scrollRight = () => {
        foodSliderRef.current.scrollBy({
            left: 700,
            behavior: "smooth"
        });
    };

    const groseriesSliderRef = useRef(null);

    const scrollLeftGroseries = () => {
        groseriesSliderRef.current.scrollBy({
            left: -700,
            behavior: "smooth"
        });
    };

    const scrollRightGroseries = () => {
        groseriesSliderRef.current.scrollBy({
            left: 700,
            behavior: "smooth"
        });
    };

    const dineOutSliderRef = useRef(null);

    const scrollLeftDineOut = () => {
        dineOutSliderRef.current.scrollBy({
            left: -700,
            behavior: "smooth"
        });
    }

    const scrollRightDineOut = () => {
        dineOutSliderRef.current.scrollBy({
            left: 700,
            behavior: "smooth"
        })
    }

    return (
        <section className="px-35 py-30">

            <div className="flex justify-between items-center mb-8">

                <h1 className="font-bold text-2xl">
                    Order our best food options
                </h1>

                <div className="flex gap-3">

                    <button
                        onClick={scrollLeft}
                        className="bg-gray-200 text-gray-600 w-9 h-9 rounded-full cursor-pointer"
                    >
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>

                    <button
                        onClick={scrollRight}
                        className="bg-gray-200 text-gray-600 w-9 h-9 rounded-full cursor-pointer"
                    >
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>

                </div>
            </div>
            <div ref={foodSliderRef} className="overflow-x-auto scrollbar-width-none   [&::-webkit-scrollbar]:hidden">

                <div className="grid grid-rows-2 grid-flow-col auto-cols-[160px] gap-x-7 gap-y-8 w-full">

                    {foodItems.map((item) => (
                        <Link
                            key={item.id}
                            to={`/food/${item.id}`}
                            className="w-[150px] text-center cursor-pointer"
                        >

                            <img
                                src={item.img}
                                alt={item.name}
                                className="
                                    w-[160px]
                                    h-[140px]
                                    object-contain shadow-xs rounded-full "
                            />

                            <p className="text-center text-xl font-medium">
                                {item.name}
                            </p>

                        </Link>
                    ))}

                </div>
            </div>

            <div>
                <div className="flex justify-between items-center mt-35">
                    <h1 className="font-bold text-2xl">Shop grocieries on Instamart</h1>
                    <div className="flex gap-3">
                        <button
                            onClick={scrollLeftGroseries}
                            className="bg-gray-200 text-gray-600 w-9 h-9 rounded-full cursor-pointer"
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>

                        <button
                            onClick={scrollRightGroseries}
                            className="bg-gray-200 text-gray-600 w-9 h-9 rounded-full cursor-pointer"
                        >
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>

                    </div>
                </div>


                <div ref={groseriesSliderRef} className="overflow-x-auto scrollbar-width-none   [&::-webkit-scrollbar]:hidden">
                    <div className="grid grid-rows-1 grid-flow-col auto-cols-[160px] gap-x-7  w-full">

                        {groseriesItems.map((grocery) => (
                            <Link
                                key={grocery.id}
                                to={`/groceries/${grocery.id}`}
                                className="w-[150px] text-center cursor-pointer mt-10"
                            >
                                <img
                                    src={grocery.img}
                                    alt={grocery.name}
                                    className="w-[150px] h-[180px]  object-contain bg-gray-100 rounded-md"
                                />
                                <p className="text-center text-xl font-medium mt-3">{grocery.name}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <div className="flex justify-between mt-30">
                    <h1 className="text-3xl font-bold">Discover best restaurants on Dineout</h1>
                    <div className="flex gap-3">
                        <button onClick={scrollLeftDineOut} className="bg-gray-200 text-gray-600 w-9 h-9 rounded-full cursor-pointer"><i className="fa-solid fa-arrow-left"></i></button>
                        <button onClick={scrollRightDineOut} className="bg-gray-200 text-gray-600 w-9 h-9 rounded-full cursor-pointer"><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>

                <div ref={dineOutSliderRef} className="overflow-x-auto scrollbar-width-none  mt-10 [&::-webkit-scrollbar]:hidden opacity-90" >
                    <div className="flex gap-4 w-max">
                        {
                            DineoutItems.map((restaurant) => (
                                <div key={restaurant.id} className="min-w-[340px] max-w-[340px] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xs">
                                    <div className="relative h-[190px] w-full">
                                        <img src={food1} alt={restaurant.name} className="object-cover w-full h-full" />
                                        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent"></div>
                                        <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                                            <h1 className="text-xl font-bold text-white">{restaurant.name}</h1>
                                            <div className="flex items-center gap-1 text-white">
                                                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-green-700"><i className="fa-solid fa-star text-[8px] "></i></span>
                                                <span className="font-semibold">{restaurant.rating}</span>
                                            </div>
                                        </div>
                                    </div> 
                                    
                                    <div className="p-4">
                                        <div className="flex justify-between items-center text-sm font-medium">
                                            <p className="text-gray-500">{restaurant.cuisine}</p>
                                            <p className="text-gray-500">{restaurant.price}</p>
                                        </div>
                                        <div className="flex justify-between items-center mt-1 text-sm font-medium">
                                            <p className="text-gray-500">{restaurant.location}</p>
                                            <p className="text-gray-500">{restaurant.Distance}</p>
                                        </div>
                                        <div className="mt-3 flex items-center justify-between rounded-lg bg-green-700 px-3 py-2 text-sm font-bold text-white">
                                            <div className="flex items-center gap-2">
                                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-green-500">
                                                    <i className="fa-solid fa-percent text-xs"></i>
                                                </span>
                                                <span className="font-semibold">
                                                    {restaurant.Prebooking_offer}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-3 rounded-lg bg-green-100 px-3 py-2 text-sm text-green-700 font-medium">
                                            <p>{restaurant.Bank_Offer}</p>
                                        </div>
                                        <p className="mt-3 text-indigo-600 text-sm font-medium">{restaurant.Other_Offer}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Food;