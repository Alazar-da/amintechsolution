import React, { useState, useEffect } from "react";
import Pic from '../assets/me2.jpg';
import "../assets/color.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

import './customer.css';

const testimData = [
  {
    name: "John Doe",
    image: {Pic},
    message: "Testimonial message 1"
  },
  {
    name: "Jane Smith",
    image: "path/to/image2.jpg",
    message: "Testimonial message 2"
  },
  {
    name: "JaSmith",
    image: "path/to/image2.jpg",
    message: "Testimonial message 3"
  },
  {
    name: "JaSmith",
    image: "path/to/image2.jpg",
    message: "Testimonial message 4"
  },
  {
    name: "JaSmith",
    image: "path/to/image2.jpg",
    message: "Testimonial message 5"
  },
  // Add more testimonial objects as needed
];

function Customers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentActive, setCurrentActive] = useState(0);

  useEffect(() => {
    let touchStartPos = 0;
    let touchEndPos = 0;
    let touchPosDiff = 0;

    const playSlide = (slide) => {
      const numSlides = testimContent.length;

      if (slide < 0) {
        slide = numSlides - 1;
      }

      if (slide >= numSlides) {
        slide = 0;
      }

      setCurrentSlide(slide);
      setCurrentActive(slide);

      for (let k = 0; k < numSlides; k++) {
        testimContent[k].classList.remove("active");
        testimContent[k].classList.remove("inactive");
        testimDots[k].classList.remove("active");
      }

      testimContent[slide].classList.add("active");
      testimDots[slide].classList.add("active");
    };

    const handleLeftArrowClick = () => {
      playSlide(currentSlide - 1);
    };

    const handleRightArrowClick = () => {
      playSlide(currentSlide + 1);
    };

    const handleDotClick = (index) => {
      playSlide(index);
    };

    const handleKeyUp = (e) => {
      switch (e.keyCode) {
        case 37:
          handleLeftArrowClick();
          break;
        case 39:
          handleRightArrowClick();
          break;
        default:
          break;
      }
    };

    const handleTouchStart = (e) => {
      touchStartPos = e.changedTouches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      touchEndPos = e.changedTouches[0].clientX;

      touchPosDiff = touchStartPos - touchEndPos;

      if (touchPosDiff > 0 + ignoreTouch) {
        handleLeftArrowClick();
      } else if (touchPosDiff < 0 - ignoreTouch) {
        handleRightArrowClick();
      } else {
        return;
      }
    };

    const testimContent = Array.from(
      document.getElementById("testim-content").children
    );
    const testimDots = Array.from(
      document.getElementById("testim-dots").children
    );
    const testimLeftArrow = document.getElementById("left-arrow");
    const testimRightArrow = document.getElementById("right-arrow");

    testimLeftArrow.addEventListener("click", handleLeftArrowClick);
    testimRightArrow.addEventListener("click", handleRightArrowClick);

    for (let l = 0; l < testimDots.length; l++) {
      testimDots[l].addEventListener("click", () => handleDotClick(l));
    }

    document.addEventListener("keyup", handleKeyUp);
    document.getElementById("testim").addEventListener("touchstart", handleTouchStart);
    document.getElementById("testim").addEventListener("touchend", handleTouchEnd);

    playSlide(currentSlide);

    return () => {
      testimLeftArrow.removeEventListener("click", handleLeftArrowClick);
      testimRightArrow.removeEventListener("click", handleRightArrowClick);
      document.removeEventListener("keyup", handleKeyUp);
      document.getElementById("testim").removeEventListener("touchstart", handleTouchStart);
      document.getElementById("testim").removeEventListener("touchend", handleTouchEnd);
    };
  }, );
  return (
    <>
    <div className='grid grid-cols-1 gap-4'>
      <div className='text-center'>
        <h2 className='font-bold lg:text-4xl text-2xl text-center animate-charcter mt-7'>Testimonial</h2>
      </div>
    <section className="container bg-[#0b476c] testim" id="testim">
      <div className="wrap">
        <span className="arrow left" id="left-arrow">
          <FontAwesomeIcon icon={faChevronCircleLeft} />
        </span>
        <span className="arrow right" id="right-arrow">
          <FontAwesomeIcon icon={faChevronCircleRight} />
        </span>
        <ul id="testim-dots" className="dots">
          <li className="dot active"></li>
          <li className="dot"></li>
          <li className="dot"></li>
          <li className="dot"></li>
          <li className="dot"></li>
        </ul>
        <div id="testim-content" className="cont">
          <div className="active">
            <div className="img">
              <img
                className="w-[64px] h-[64px] rounded-full"
                src={Pic}
                alt="pic 1"
              />
            </div>
            <h2>Lorem P. Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div>
            <div className="img">
              <img
                className="w-[64px] h-[64px] rounded-full"
                src={Pic}
                alt="pic 1"
              />
            </div>
            <h2>Lorem P. Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div>
            <div className="img">
              <img
                className="w-[64px] h-[64px] rounded-full"
                src={Pic}
                alt="pic 1"
              />
            </div>
            <h2>Lorem P. Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div>
            <div className="img">
              <img
                className="w-[64px] h-[64px] rounded-full"
                src={Pic}
                alt="pic 1"
              />
            </div>
            <h2>Lorem P. Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div>
            <div className="img">
              <img
                className="w-[64px] h-[64px] rounded-full"
                src={Pic}
                alt="pic 1"
              />
            </div>
            <h2>Lorem P. Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
    </>
  );
}

export default Customers;