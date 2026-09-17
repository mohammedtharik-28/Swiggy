import { useEffect, useState } from "react";

const slides = [
    {
        first: "The given product is good",
        second: "the rating is 5"
    },
    {
        first: "The given product is average",
        second: "the rating is 3"
    },
    {
        first: "The given product is bad",
        second: "the rating is 1"
    }
];

function Owner() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1 className="">
                {slides[currentSlide].first} <br />
                {slides[currentSlide].second}
            </h1>
            <div className="h-[2px] w-full"></div>
        </div>
    );
}

export default Owner;