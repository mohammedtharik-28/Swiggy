import React, { useRef } from "react";

import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import { Link } from "react-router-dom";

function Food() {
    const foodItems = [
        {
            id: 1,
            name: "Idli",
            img: food1
        },
        {
            id: 2,
            name: "Salad",
            img: food2
        },
        {
            id: 3,
            name: "Vada",
            img: food2
        },
        {
            id: 4,
            name: "Appam",
            img: food2
        },
        {
            id: 5,
            name: "Pongal",
            img: food2
        },
        {
            id: 6,
            name: "Omelette",
            img: food2
        },
        {
            id: 7,
            name: "Dosa",
            img: food2
        },
        {
            id: 8,
            name: "Khichdi",
            img: food2
        },
        {
            id: 9,
            name: "Poori",
            img: food2
        },
        {
            id: 10,
            name: "Paratha",
            img: food2
        },
        {
            id: 11,
            name: "Biryani",
            img: food2
        },
        {
            id: 12,
            name: "Puttu",
            img: food2
        },
        {
            id: 13,
            name: "Cake",
            img: food2
        },
        {
            id: 14,
            name: "Shake",
            img: food2
        },
        {
            id: 15,
            name: "Juice",
            img: food2
        },
        {
            id: 16,
            name: "Samosa",
            img: food2
        },
        {
            id: 17,
            name: "Uthappam",
            img: food2
        },
        {
            id: 18,
            name: "Pancake",
            img: food2
        },
        {
            id: 19,
            name: "Parotta",
            img: food2
        },
        {
            id: 20,
            name: "Coffee",
            img: food2
        }
    ];

    const groseriesItems = [
        {
            id: 1,
            name: "Fresh Vegetables",
            img: food1
        },
        {
            id: 2,
            name: "Fresh Fruits",
            img: food2
        },
          {
            id: 3,
            name: "Dairy, Bread and Eggs",
            img: food2
        },
          {
            id: 4,
            name: "Rice, Atta and Dals",
            img: food2
        },
          {
            id: 5,
            name: "Masalas and Dry Fruits",
            img: food2
        },
          {
            id: 6,
            name: "Oils and Ghee",
            img: food2
        },
          {
            id: 7,
            name: "Munchies",
            img: food2
        },
          {
            id: 8,
            name: "Sweet Tooth",
            img: food2
        },
          {
            id: 9,
            name: "Cold Drinks and Juices",
            img: food2
        },
          {
            id: 10,
            name: "Biscuit and Cakes",
            img: food2
        },  {
            id: 11,
            name: "Instant and Frozen Food",
            img: food2
        },
          {
            id: 12,
            name: "Meat and Seafood",
            img: food2
        },
          {
            id: 13,
            name: "Cereals and Breakfast",
            img: food2
        },
          {
            id: 14,
            name: "Sauces and Spreads",
            img: food2
        },
          {
            id: 15,
            name: "Tea, Coffee and More",
            img: food2
        },
          {
            id: 16,
            name: "Cleaning Essentials",
            img: food2
        },
          {
            id: 17,
            name: "Pharma and Hygiene",
            img: food2
        },
          {
            id: 18,
            name: "Bath, Body and Hair",
            img: food2
        },
          {
            id: 19,
            name: "Paan Corner",
            img: food2
        },
          {
            id: 20,
            name: "Home and Kitchen",
            img: food2
        },
          {
            id: 21,
            name: "Office and Electricals",
            img: food2
        },
          {
            id: 22,
            name: "Baby Care",
            img: food2
        },
        {
            id: 23,
            name: "Pet Supplies",
            img: food2
        },
        {
            id: 23,
            name: "Beauty and Grooming",
            img: food2
        },
    ];

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
                                    object-contain"
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

                    {groseriesItems.map((item) => (
                        <Link
                            key={item.id}
                            to={`/groceries/${item.id}`}
                            className="w-[150px] text-center cursor-pointer mt-10"
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-[150px] h-[180px]  object-contain bg-gray-100 rounded-md"
                            />
                            <p className="text-center text-xl font-medium mt-3">{item.name}</p>
                        </Link>
                    ))}
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Food;