"use client";
import React, { useState, useEffect } from 'react';

const BannerSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 2;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === totalSlides ? 1 : prevSlide + 1
            );
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel w-full banner-slider">
            <div id="slide1"
                className={`carousel-item relative w-full ${currentSlide === 1 ? 'block' : 'hidden'}`}>
                <img src="/image/image1.jpg"
                    className="w-full"
                    alt="Slide 1" />
            </div>
            <div id="slide2"
                className={`carousel-item relative w-full ${currentSlide === 2 ? 'block' : 'hidden'}`}>
                <img
                    src="/image/image2.jpg"
                    className="w-full"
                    alt="Slide 2"
                />
            </div>
            {/* <div id="slide3"
                className={`carousel-item relative w-full ${currentSlide === 3 ? 'block' : 'hidden'}`}>
                <img
                    src="/image/image3.webp"
                    className="w-full"
                    alt="Slide 3"
                />
            </div> */}
        </div>
    );
};

export default BannerSlider;
