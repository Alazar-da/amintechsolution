import React, { useState, useEffect } from "react";
//import Pic from '../assets/me2.jpg';
import "../assets/color.css"
import Pic from '../assets/profile.jpg';

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
          
        </ul>
        <div id="testim-content" className="cont">
          
        
          <div>
            <div className="img">
              <img
                className="w-[64px] h-[64px] rounded-full"
                src={Pic}
             
                alt="pic 1"
              />
            </div>
            <h2>Ato Adugna Meamer</h2>
            <p>
            "Ever since we started using palm socials, managing our social media presence has become effortless. This app has revolutionized the way we handle our social media accounts. It offers powerful features, intuitive interface, and excellent analytics that have helped us streamline our content creation, scheduling, and engagement. With [App Name], we save valuable time and see noticeable improvements in our social media performance. It's a must-have tool for any business looking to level up their social media game."
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
            <h2>Abdulhamid Ali</h2>
            <p>
            "Working with Mina Tech was a game-changer for our business. They designed and developed a stunning commercial website that perfectly represents our brand and effectively showcases our products and services. Their team was attentive, responsive, and truly understood our vision. The website they created has not only attracted more traffic but has also significantly increased our online conversions. We couldn't be happier with the results and highly recommend Mina Tech for anyone looking to elevate their online presence."
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
            <h2>Mohammed hassena</h2>
            <p>
            Implementing the system in our gym has been a game-changer. This attendance management system has simplified our operations and enhanced the overall member experience. It's user-friendly, efficient, and allows us to effortlessly track attendance, manage memberships, and generate insightful reports. Our members love the convenience of checking in with just a tap, and our staff appreciates the seamless integration with other gym management processes. [System Name] has truly transformed the way we run our gym, and we highly recommend it to any fitness facility looking to optimize their operation
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