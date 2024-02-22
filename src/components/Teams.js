/* import "./Teams.css"
import 'swiper/swiper-bundle.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; */
/* import React from 'react';
import './CircularCarousel.css'; */
import React from 'react';
import "../assets/color.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function Teams() {
  const handleClick = (event) => {
    event.preventDefault();
    // Add your custom logic or actions here
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };




    return(
      <>
        <div className="grid grid-cols-1 py-5">
        <h2 className="font-bold lg:text-4xl text-2xl  animate-charcter text-center mb-5" id='hi'>Portfolio</h2>
        <div className="grid md:grid-cols-6 grid-cols-10">
        <div className="carousel w-full md:col-start-2 md:col-span-4 col-start-2 col-span-8 ">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" alt="img1" className="w-full lg:h-[400px] md:h-[300px] h-[200px]" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle" >❮</a>
              <a href="#slide2" className="btn btn-circle" >❯</a>
            </div>
            <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-3/4">
              <div className="grid grid-cols-1">
                <h2 className="text-black text-3xl">new text</h2>
                <p className="text-black text-1xl">discription text here....</p>
              </div>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" alt="img2" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle" >❮</a>
              <a href="#slide3" className="btn btn-circle" >❯</a>
            </div>
            <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-3/4">
              <div className="grid grid-cols-1">
                <h2 className="text-black text-3xl">new text</h2>
                <p className="text-black text-1xl">discription text here....</p>
              </div>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" alt="img3" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle" >❮</a>
              <a href="#slide4" className="btn btn-circle" >❯</a>
            </div>
            <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-3/4">
              <div className="grid grid-cols-1">
                <h2 className="text-black text-3xl">new text</h2>
                <p className="text-black text-1xl">discription text here....</p>
              </div>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" alt="img4" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
            <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-3/4">
              <div className="grid grid-cols-1">
                <h2 className="text-black text-3xl">new text</h2>
                <p className="text-black text-1xl">discription text here....</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </>

    );
   }

   export default Teams;