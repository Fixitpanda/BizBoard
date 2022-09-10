import React from "react";
import Slider from "react-slick";
import "./Banner.css";

function Banner() {
  var settings = {
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
        {/* <div style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + 'https://cdn.pixabay.com/photo/2013/04/02/19/54/playground-99509_960_720.jpg'})`,
        backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
        width:'100%' ,
        height: '500px'
        }}>
        Hello World
        </div> */}

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

export default Banner;
