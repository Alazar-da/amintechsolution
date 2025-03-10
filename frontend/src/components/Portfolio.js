import React, { useState, useEffect } from "react";
//import Pic from '../assets/me2.jpg';
import "../assets/color.css"
/* import Pic from '../assets/profile.jpg'; */
import Work1 from "../assets/palm.png";
import Work2 from "../assets/blue2.png";
import Work3 from "../assets/sup2.jpg";
import Work4 from "../assets/baheran.jpg";
import Work5 from "../assets/gym.jpg";
import Work6 from "../assets/milkomi.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

import './customer.css';

const handleVisitWebsite = () => {
  window.open('https://www.bluebesttrading.com', '_blank');
};


/* const testimData = [
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
]; */

function Portfolio() {
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
    <div className='grid grid-cols-1 gap-4 mt-7'>
      <div className='text-center'>
        <h2 className='font-bold lg:text-4xl text-2xl text-center animate-charcter mt-7'>Portfolio</h2>
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
          <li className="dot"></li>
          
        </ul>
        <div id="testim-content" className="cont">

        <div>
  <div className="img">
    <img
      className="w-[64px] h-[64px] rounded-full bg-white"
      src={Work1}
      alt="Company Logo"
    />
  </div>
  <h2>Palm Realestate Property Management App</h2>
  <p className="w-5/6 m-auto text-white">
  "Using Palm Property Manager has made managing our real estate portfolio effortless. This tool has completely transformed our approach to property management. We eased tenant communications, maintenance tracking, and rent collection with its powerful features, user-friendly design, and analytical data. Palm Property Manager has helped us save time and improve our operational effectiveness significantly."
  </p>
  <h2>Selamawit Ayalew, General Manager</h2>
  {/* <a href="https://www.palmsocials.com" target="_blank" className="text-emerald-400 cursor-pointer hover:text-cyan-900 transition-colors duration-300">Visit Palm Socials</a> */}
</div>

<div>
  <div className="img">
    <img
      className="w-[64px] h-[64px] rounded-full bg-white"
      src={Work4}
      alt="Company Logo"
    />
  </div>
  <h2>Baheran Rentals</h2>
  <p className="w-5/6 m-auto text-white">
  "Using Baheran Rentals has completely transformed how we manage our rental properties. The app simplifies every aspect of property management, making it easy to handle tenant interactions, maintenance requests, and rent collection all in one place. Its sleek design and powerful features provide invaluable insights that have significantly improved our efficiency. Since adopting Baheran Rentals, we've gained back precious time and seen a remarkable boost in our overall productivity."
  </p>
  <h2>Ato Desse Alemu, Managing Director</h2>
  {/* <a href="https://www.palmsocials.com" target="_blank" className="text-emerald-400 cursor-pointer hover:text-cyan-900 transition-colors duration-300">Visit Palm Socials</a> */}
</div>
          
        
        <div>
  <div className="img">
    <img
      className="w-[64px] h-[64px] rounded-full bg-white"
      src={Work1}
      alt="Company Logo"
    />
  </div>
  <h2>Palm Socials</h2>
  <p className="w-5/6 m-auto text-white">
    "Ever since we started using Palm Socials, managing our social media presence has become effortless. This app has revolutionized the way we handle our social media accounts. It offers powerful features, intuitive interface, and excellent analytics that have helped us streamline our content creation, scheduling, and engagement. With Palm Socials, we save valuable time and see noticeable improvements in our social media performance. It's a must-have tool for any business looking to level up their social media game."
  </p>
  <h2>Selamawit Ayalew, General Manager</h2>
  {/* <a href="https://www.palmsocials.com" target="_blank" className="text-emerald-400 cursor-pointer hover:text-cyan-900 transition-colors duration-300">Visit Palm Socials</a> */}
</div>

<div>
  <div className="img">
    <img
      className="w-[64px] h-[64px] rounded-full bg-white"
      src={Work6}
      alt="Company Logo"
    

    />
  </div>
  <h2>Milkomi Consultancy Commercial Website</h2>
  <p className="w-5/6 m-auto text-white">
  "Working with Mina Technologies was a game changer for our educational platform. Their expertise in web development and design brought our vision to life, creating a user-friendly and visually appealing website that perfectly reflects our mission. They were attentive, innovative, and always ready to tackle challenges with a solutions-oriented mindset. Thanks to their hard work and dedication, our online presence has significantly improved, allowing us to better serve our clients. I highly recommend their services to anyone looking to enhance their digital experience!"
  </p>
  <h2>Ato Adnan, General Manager</h2>

  {/* <button onClick={handleVisitWebsite} className="text-emerald-400 cursor-pointer hover:text-cyan-900 transition-colors duration-300">Visit BlueBest Trading</button> */}
  
 
</div>

<div>
  <div className="img">
    <img
      className="w-[64px] h-[64px] rounded-full bg-white"
      src={Work2}
      alt="Company Logo"
      onClick={handleVisitWebsite}
      onclick={handleVisitWebsite}
    />
  </div>
  <h2>BlueBest Trading Commercial Website</h2>
  <p className="w-5/6 m-auto text-white">
  "Working with Mina Tech was a game-changer for our business. They designed and developed a stunning commercial website that perfectly represents our brand and effectively showcases our products and services. Their team was attentive, responsive, and truly understood our vision. The website they created has not only attracted more traffic but has also significantly increased our online conversions. We couldn't be happier with the results and highly recommend Mina Tech for anyone looking to elevate their online presence."
  </p>
  <h2>Ato Abdulhamid ALi, General Manager</h2>

  {/* <button onClick={handleVisitWebsite} className="text-emerald-400 cursor-pointer hover:text-cyan-900 transition-colors duration-300">Visit BlueBest Trading</button> */}
  
 
</div>




<div>
  <div className="img">
    <img
      className="w-[64px] h-[64px] rounded-full bg-white"
      src={Work5}
      alt="Company Logo"
    />
  </div>
  <h2>SuperStar Gym management</h2>
  <p className="w-5/6 m-auto text-white">
  "Implementing the system in our gym has been a game-changer. This attendance management system has simplified our operations and enhanced the overall member experience. It's user-friendly, efficient, and allows us to effortlessly track attendance, manage memberships, and generate insightful reports. Our members love the convenience of checking in with just a tap, and our staff appreciates the seamless integration with other gym management processes. This system has truly transformed the way we run our gym, and we highly recommend it to any fitness facility looking to optimize their operation"
  </p>
  <h2>Ato Mohammed Hassena, General Manager</h2>
 {/*  <a href="#" target="_blank" className="text-emerald-400 cursor-pointer hover:text-cyan-900 transition-colors duration-300">Visit Palm Socials</a> */}
</div>

        
         
        </div>
      </div>
    </section>
    </div>
    </>
  );
}

export default Portfolio;