import React, { useState, useEffect } from "react";
import Pic from '../assets/me2.jpg';
import "../assets/color.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'


import "./Customer.css";





function Customers() {


    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentActive, setCurrentActive] = useState(0);
    const [testimTimer, setTestimTimer] = useState(null);
  
    const testimSpeed = 4500;
    const ignoreTouch = 30;
  
    useEffect(() => {
      const testim = document.getElementById("testim");
      const testimDots = Array.prototype.slice.call(
        document.getElementById("testim-dots").children
      );
      const testimContent = Array.prototype.slice.call(
        document.getElementById("testim-content").children
      );
      const testimLeftArrow = document.getElementById("left-arrow");
      const testimRightArrow = document.getElementById("right-arrow");
  
      const playSlide = (slide) => {
        for (let k = 0; k < testimDots.length; k++) {
          testimContent[k].classList.remove("active");
          testimContent[k].classList.remove("inactive");
          testimDots[k].classList.remove("active");
        }
  
        if (slide < 0) {
          slide  = testimContent.length - 1;
          setCurrentSlide(slide);
        }
  
        if (slide > testimContent.length - 1) {
          slide  = 0;
          setCurrentSlide(slide);
        }

        if (currentActive !== currentSlide) {
          testimContent[currentActive].classList.add("inactive");
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");
  
        setCurrentActive(currentSlide);
  
        clearTimeout(testimTimer);
        setTestimTimer(
          setTimeout(() => {
            playSlide(currentSlide + 1);
          }, testimSpeed)
        );
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
  
      testimLeftArrow.addEventListener("click", handleLeftArrowClick);
      testimRightArrow.addEventListener("click", handleRightArrowClick);
  
      for (let l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", () => handleDotClick(l));
      }
  
      document.addEventListener("keyup", handleKeyUp);
  
      testim.addEventListener("touchstart", handleTouchStart);
  
      testim.addEventListener("touchend", handleTouchEnd);
  
      playSlide(currentSlide);
  
      return () => {
        clearTimeout(testimTimer);
        testimLeftArrow.removeEventListener("click", handleLeftArrowClick);
        testimRightArrow.removeEventListener("click", handleRightArrowClick);
        document.removeEventListener("keyup", handleKeyUp);
        testim.removeEventListener("touchstart", handleTouchStart);
        testim.removeEventListener("touchend", handleTouchEnd);
      };
    }, []);

  return (
    <>
    <div className='grid grid-cols-1 gap-4'>
      <div className='text-center'>
        <h2 className='font-bold lg:text-4xl text-2xl text-center animate-charcter mt-7'>Testimonial</h2>
      </div>
      <section className='container bg-[#0b476c] testim' id="testim" /* ref={testimRef} */>

      <div className="wrap">


      <span className="arrow left"  id="left-arrow"><FontAwesomeIcon icon={faChevronCircleLeft} /></span>
        

        <span className="arrow right" id="right-arrow"><FontAwesomeIcon icon={faChevronCircleRight} /></span>
    


        <ul id="testim-dots" className="dots">
            <li className="dot active"></li>
            <li className="dot"></li>
            <li className="dot"></li>
            <li className="dot"></li>
            <li className="dot"></li>
        </ul>
        <div id="testim-content" /* ref={testimContentRef} */ className="cont">
            <div className="active">
                <div className="img">
                  <img className='w-[64px] h-[64px] rounded-full' src={Pic} alt='pic 1' />
                </div>
                <h2>Lorem P. Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
            <div>
                <div className="img">
                  <img className='w-[64px] h-[64px] rounded-full' src={Pic} alt='pic 1' />
                </div>
                <h2>Lorem P. Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
            <div>
                <div className="img">
                  <img className='w-[64px] h-[64px] rounded-full' src={Pic} alt='pic 1' />
                </div>
                <h2>Lorem P. Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
            <div>
                <div className="img">
                  <img className='w-[64px] h-[64px] rounded-full' src={Pic} alt='pic 1' />
                </div>
                <h2>Lorem P. Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
            <div>
                <div className="img">
                  <img className='w-[64px] h-[64px] rounded-full' src={Pic} alt='pic 1' />
                </div>
                <h2>Lorem P. Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
        </div>

      </div>
      </section>
    </div>
    </>
  );
}

export default Customers;
