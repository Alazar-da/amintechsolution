import Lotti from '../img/lotti.svg';
import Logo from '../img/logo.svg';
import { FaBars } from "react-icons/fa";

import '../index.css';
import "../assets/color.css"

import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../assets/software3.json';


function Home() {
  const collapse=()=>{
   document.querySelector('#menu').classList.toggle('hidden');

  }

  const lottieBackground = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  };
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animationData,
      renderer: 'svg', // Choose the renderer (svg, canvas, html)
      loop: true, // Set loop to true or false
      autoplay: true, // Set autoplay to true or false
    });

    return () => {
      anim.destroy(); // Cleanup on unmount
    };
  }, []);

 return(

    <div className="bg-white md:pl-[85px] md:h-[600px] pb-5 lg:h-screen">
       {window.innerWidth < 768 ? (
    <div style={lottieBackground} ref={animationContainer}></div>
  ) : null}
      {/* <header>
        <nav class="flex justify-between px-5 w-full py-4 md:py-0 text-textColor">
          <div>
            <a href="#">
              <img src={Logo} alt='logo'></img>
            </a>
          </div>
          <svg class="h-6 w-6 cursor-pointer md:hidden block"> </svg>
          <button class="h-6 w-6 cursor-pointer md:hidden flex items-center" onClick={collapse}>
            <svg xmlns="<http://www.w3.org/2000/svg>" id="menu-button" className='py-4' fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>

            <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">
              <ul class="text-base text-gray-700 pt-4 md:flex md:justify-center md:w-100 md:pt-0">
                <li>
                  <a class="md:p-4 py-2 block hover:text-purple-400" href="#">Home</a>
                </li>
                <li>
                  <a class="md:p-4 py-2 block hover:text-purple-400" href="#">Team</a>
                </li>
                <li>
                  <a class="md:p-4 py-2 block hover:text-purple-400" href="#">Portfolio</a>
                </li>
              </ul>
              <button class="border border-black rounded-full font-bold px-8 py-2">Contact me</button>
          </div>
        </nav>
      </header> */}
      <header className="md:flex md:items-center md:justify-between p-4 pb-0 md:pb-4 text-textColor p-">

  <div className="flex items-center justify-between mb-4 md:mb-0">
    <h1 className="leading-none text-2xl text-grey-darkest">
      <a className="no-underline text-grey-darkest hover:text-black" href="#">
      <img src={Logo} alt='logo'></img>
      </a>
    </h1>

    <button className="text-black hover:text-orange md:hidden" onClick={collapse}>
    <FaBars icon="fa-solid fa-bars" />
    </button>
  </div>
 {/*  <form className="mb-4 w-full md:mb-0 md:w-1/4">
    <label className="hidden" for="search-form">Search</label>
    <button >Submit</button>
  </form> */}

  <nav className='hidden md:grid md:grid-cols-3 md:gap-4 w-full' id='menu'>
    <ul class="md:flex md:col-span-2 md:justify-center md:items-center">
      <li className="md:mx-[35px] lg:mx-[40px]">
        <a className="block no-underline hover:underline py-2 text-primary text-base font-bold hover:text-[#0b476c] md:border-none md:p-0" href="#">
          Home
        </a>
      </li>
      <li className="md:mx-[15px] lg:mx-[30px]">
        <a className="border-t block no-underline hover:underline py-2 text-primary text-base font-bold hover:text-[#0b476c] md:border-none md:p-0" href="#">
          Services
        </a>
      </li>
      <li className="md:mx-[15px] lg:mx-[30px]">
        <a className="border-t block no-underline hover:underline py-2 text-primary text-base font-bold hover:text-[#0b476c] md:border-none md:p-0" href="#">
          Team
        </a>
      </li>
      <li className="md:mx-[15px] lg:mx-[30px]">
        <a className="border-t block no-underline hover:underline py-2 text-primary text-base font-bold hover:text-[#0b476c] md:border-none md:p-0" href="#">
          Portfolio
        </a>
      </li>
    </ul>
    <div className='border-t md:border-none md:flex md:justify-center md:items-center'>
      {/* <button class="border border-black rounded-full px-8 py-2 mt-3 md:mt-0">Contact Us</button> */}
      <a class="py-2 md:mt-2 md:p-0 no-underline hover:underline text-primary text-base font-bold hover:text-[#0b476c] md:border-none" href='#'>Contact Us</a>
    </div>
  </nav>


</header>
      <div className='md:grid md:grid-cols-2 '>
        <div className='my-auto pt-5 md:pt-0 px-5 md:px-0'>
          <h1 className='font-bold lg:text-3xl text-2xl animate-charcter'>Software Development Services</h1>
           
              <div className="grid grid-cols-4">
                <div className="col-span-3">
                <p className='mt-3'>
                We help you launch and scale your Mobile and Web Apps. Since 2014 we build
                custom applications loved by millions
                </p>
                </div>
              </div>
              <button className="btn btn-outline btn-info px-8 py-2 mt-3">Get in touch</button>

        </div>
        <div className='hidden md:inline'>

        <div ref={animationContainer}></div>
        </div>
      </div>
    </div>
 );
}

export default Home;


//<img src={Lotti} alt="logo" className='h-[600px] w-100 float-right'></img>
//<div className="bg-gradient-to-r from-[#fff] to-[#f5f7fa] md:pl-[85px] md:h-[753px] pb-5">
//<button className="border border-black rounded-full px-8 py-2 mt-3">Get in touch</button>