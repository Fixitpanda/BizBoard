import React from "react";
import Slider from "react-slick";
import "./Slider.css";

function SliderData() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
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
          <h3>You can publish your shit here.</h3>
        </div>
        <div className="slider-element">
          <h3>So let's do some shit together...</h3>
        </div>
        <div className="slider-element">
          <h3>Because almost any shit is possible...</h3>
        </div>
        <div className="slider-element">
          <h3>With React...</h3>
        </div>
      </Slider>
    </div>
  );
}

export default SliderData;
