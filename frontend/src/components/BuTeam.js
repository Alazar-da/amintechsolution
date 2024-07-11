//import "../assets/why.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import React from "react";

import Work1 from "../assets/palm.png";
import Work2 from "../assets/blue2.png";
import Work3 from "../assets/sup2.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Container = styled.div`
  /* your regular styles here */

  @media (max-width: 768px) {
    display:none;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    /* styles for screens between 769px and 1024px width */
  }

  @media (min-width: 1025px) {
    /* styles for screens larger than 1024px width */
  }
`;



/* function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", borderRadius:"10px", background: "#3f51b5" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, borderRadius:"10px", background: "#3f51b5"}}
      onClick={onClick}
    />
  );
} */

function Teams()
{/* 
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }; */

    return(
<>
<div className="container my-5 grid grid-cols-1 gap-4 content-center lg:h-[700px]" id="portfolio">
  <div className="text-center mt-10">
  <h2 className="font-bold lg:text-4xl text-2xl  animate-charcter text-center mb-5">Portfolio</h2>

  </div>

  <Carousel className="md:h-64">
    <div className="flex flex-row">
      <div className="w-1/2 md:w-1/3 rounded-l-lg">
        <img className="h-64" src={Work1} alt="Movie"/>
      </div>
      <div className="w-1/2 md:w-2/3 grid content-center bg-[#012236] rounded-r-lg">
        <h2 className="text-center text-white">Palm Socials</h2>
        <p className="text-center text-white">Cutting edge social media management App.</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div> */}
      </div>
    </div>
    <div className="flex flex-row">
      <div className="w-1/2 md:w-1/3 rounded-l-lg">
        <img className="h-64" src={Work2} alt="Movie"/>
      </div>
      <div className="w-1/2 md:w-2/3 grid content-center bg-[#012236] rounded-r-lg">
        <h2 className="text-center text-white">Commercial website</h2>
        <p className="text-center text-white">modern commercial wesite for blubest trading a well known phrarmacutical importing company.</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div> */}
      </div>
    </div>
    <div className="flex flex-row ">
      <div className="w-1/2 md:w-1/3 rounded-l-lg">
        <img className="h-64" src={Work3} alt="Movie"/>
      </div>
      <div className="w-1/2 md:w-2/3 grid content-center bg-[#012236] rounded-r-lg">
        <h2 className="text-center text-white">Gym management system</h2>
        <p className="text-center text-white">intutive and mordern gym managemnt system for superstar gym.</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div> */}
      </div>
    </div>
  </Carousel>
</div>
</>


    )
}

export default Teams;