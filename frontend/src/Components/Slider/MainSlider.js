import React from "react";
import Slider from "react-slick";
import "./Slider.css";

function SliderData() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <div className="bg-dark text-light text-center">
            <Slider {...settings}>
                <div className="slider-element">
                    <h3>Hi, there...</h3>
                </div>

                <div className="slider-element">
                    <h3>This is Open Source, Frontend + Backend project.</h3>
                </div>
                <div className="slider-element">
                    <h3>Frontend: React v18+ ,Backend: Python v3.10+ </h3>
                </div>
                <div className="slider-element">
                    <h3>Hopefully you'll enjoy using it...</h3>
                </div>
                <div className="slider-element">
                    <h3>Follow me on GitHub for more!</h3>
                </div>
            </Slider>
        </div>
    );
}

export default SliderData;
