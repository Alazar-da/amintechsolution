import React, { useEffect, useRef } from 'react';
import Pic from '../assets/me2.jpg';
import './customer.css';



function Customers() {
  const testimRef = useRef(null);
  const testimDotsRef = useRef([]);
  const testimContentRef = useRef([]);
  const testimLeftArrowRef = useRef(null);
  const testimRightArrowRef = useRef(null);
  const testimSpeed = 4500;
  let currentSlide = 0;
  let currentActive = 0;
  let testimTimer;
  let touchStartPos;
  let touchEndPos;
  let touchPosDiff;
  const ignoreTouch = 30;

  useEffect(() => {
    const testim = testimRef.current;
    const testimDots = testimDotsRef.current;
    const testimContent = testimContentRef.current;
    const testimLeftArrow = testimLeftArrowRef.current;
    const testimRightArrow = testimRightArrowRef.current;

    // Testim Script
    function playSlide(slide) {
      for (let k = 0; k < testimDots.length; k++) {
       /// testimContent[k].classList.remove("active");
        ////testimContent[k].classList.remove("inactive");
     //   testimDots[k].classList.remove("active");
      }

      if (slide < 0) {
        slide = currentSlide = testimContent.length - 1;
      }

      if (slide > testimContent.length - 1) {
        slide = currentSlide = 0;
      }

      if (currentActive !== currentSlide) {
      //  testimContent[currentActive].classList.add("inactive");
      }
     // testimContent[slide].classList.add("active");
     // testimDots[slide].classList.add("active");

      currentActive = currentSlide;

      clearTimeout(testimTimer);
      testimTimer = setTimeout(function () {
        playSlide(currentSlide += 1);
      }, testimSpeed);
    }

    testimLeftArrow.addEventListener("click", function () {
      playSlide(currentSlide -= 1);
    });

    testimRightArrow.addEventListener("click", function () {
      playSlide(currentSlide += 1);
    });

    for (let l = 0; l < testimDots.length; l++) {
      testimDots[l].addEventListener("click", function () {
        playSlide((currentSlide = testimDots.indexOf(this)));
      });
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function (e) {
      switch (e.keyCode) {
        case 37:
          testimLeftArrow.click();
          break;

        case 39:
          testimRightArrow.click();
          break;

        case 39:
          testimRightArrow.click();
          break;

        default:
          break;
      }
    });

    testim.addEventListener("touchstart", function (e) {
      touchStartPos = e.changedTouches[0].clientX;
    });

    testim.addEventListener("touchend", function (e) {
      touchEndPos = e.changedTouches[0].clientX;

      touchPosDiff = touchStartPos - touchEndPos;

      console.log(touchPosDiff);
      console.log(touchStartPos);
      console.log(touchEndPos);

      if (touchPosDiff > 0 + ignoreTouch) {
        testimLeftArrow.click();
      } else if (touchPosDiff < 0 - ignoreTouch) {
        testimRightArrow.click();
      } else {
        return;
      }
    });
  }, []);

  return (
    <>
      <section id="testim" ref={testimRef}>

      <div className="wrap">

        <span id="right-arrow" className="arrow right fa fa-chevron-right" ref={testimRightArrowRef}></span>
        <span id="left-arrow" className="arrow left fa fa-chevron-left " ref={testimLeftArrowRef}></span>
        <ul id="testim-dots" className="dots">
            <li className="dot active"></li>
            <li className="dot"></li>
            <li className="dot"></li>
            <li className="dot"></li>
            <li className="dot"></li>
        </ul>
        <div id="testim-content" ref={testimContentRef} className="cont">
            <div className="active">
                <div className="img">
                  <img src={Pic} alt='pic 1' />
                </div>
                <h2>Lorem P. Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
            <div>
                <div className="img">
                  <img src={Pic} alt='pic 1' />
                </div>
                <h2>Lorem P. Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
            <div>
                <div className="img">
                  <img src={Pic} alt='pic 1' />
                </div>
                <h2>Lorem P. Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
            <div>
                <div className="img">
                  <img src={Pic} alt='pic 1' />
                </div>
                <h2>Lorem P. Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
            <div>
                <div className="img">
                  <img src={Pic} alt='pic 1' />
                </div>
                <h2>Lorem P. Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
        </div>

      </div>
      </section>
    </>
  );
}

export default Customers;