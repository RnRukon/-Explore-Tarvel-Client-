import React from 'react';
import Banner1 from "../../Home/Travelers/img/travel-tourism-banner-trip-insurance-online-tours-international-flights-plane-suitcase-luggage-sunglasses-blue-253108658.jpg"
import Banner2 from "../../Home/Travelers/img/banner-travel-tourism-gastronomic-tours-trips-to-wineries-holidays-countryside-hand-airplane-background-246463642.jpg"
import Banner3 from "../../Home/Travelers/img/tours-travelers-banner-online-travel-agency-website-airplane-luggage-passport-globe-blue-background-copy-space-251816923.jpg"
const Banner = () => {
    return (
        <div
            id="carouselDarkVariant"
            className="carousel slide carousel-fade carousel-dark relative mt-14"
            data-bs-ride="carousel"
        >
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide-to="1"
                    aria-label="Slide 1"
                ></button>
                <button
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide-to="2"
                    aria-label="Slide 1"
                ></button>
            </div>


{/* https://i.ibb.co/j3jJ3kM/Intrepid-Travel-Morocco-Sahara-camel-ride.jpg */}

            <div className="carousel-inner relative w-full overflow-hidden">

                <div className="carousel-item active relative float-left w-full">
                    <img
                        src={Banner1}
                        className="block w-full"
                        alt="Motorbike Smoke"
                    />
                    <div className="carousel-caption  absolute text-center text-white">
                        <h5 className="text-xl">France Reopens Tourism</h5>
                        <p style={{ textSizeAdjust: 'auto' }}>The Marvels Of Paris Are Open Now!</p>
                    </div>
                </div>


                <div className="carousel-item relative float-left w-full">
                    <img
                        // src="https://i.ibb.co/XjGZCwV/182-1826005-family-travel-photos-hd.jpg"
                        src={Banner2}
                        className="block w-full"
                        alt="Mountaintop"
                    />
                    <div className="carousel-caption  absolute text-center text-white">
                        <h5 className="text-xl">Virtual Reality Travel</h5>
                        <p> Experiences | VR Travel | 360 Production | Visualise</p>
                    </div>
                </div>


                <div className="carousel-item relative float-left w-full">
                    <img
                        src={Banner3}
                        // src="https://i.ibb.co/6tsk4yd/Sahara-Desert-Morocco-Berbers.jpg"
                        className="block w-full"
                        alt="Woman Reading a Book"
                    />
                    <div className="carousel-caption absolute text-center text-white">
                        <h5 className="text-xl">Egypt Tours Portal</h5>
                        <p>4 Main Types of Tourism in Egypt - Egypt Tours Portal</p>
                    </div>
                </div>
            </div>


            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselDarkVariant"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselDarkVariant"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;