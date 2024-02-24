//import "../assets/why.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function Trial()
{
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

    return(
      <div className="container">
        <Slider {...settings}>
      <div className="h-48 w-48 bg-red">
        <h3 className="text-black">1</h3>
      </div>
      <div className="h-48 w-48 bg-green">
        <h3>2</h3>
      </div>
      <div className="h-48 w-48 bg-black">
        <h3>3</h3>
      </div>
      <div className="h-48 w-48 bg-blue">
        <h3>4</h3>
      </div>
      <div className="h-48 w-48 bg-green">
        <h3>5</h3>
      </div>
      <div className="h-48 w-48 bg-yellow" >
        <h3>6</h3>
      </div>
    </Slider>
      </div>
      

    )
}

export default Trial;