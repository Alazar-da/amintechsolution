import Lotti from '../img/lotti.svg';
import Logo from '../img/logo.svg';
import { FaBars } from "react-icons/fa";

import '../index.css';
import "../assets/color.css"

import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../assets/software3.json';

const collapse=()=>{
    document.querySelector('#menu').classList.toggle('hidden');
    document.querySelector('#menu2').classList.toggle('hidden');
   }
  
const Nav = ({home,service,team,portfolio,contact})=>{
    React.useEffect(()=>{
        document.addEventListener('click', function (event) {
          if (event.target.matches('a[href^="#"]')) {
            event.preventDefault(); // Prevent default link behavior
        
            // Get the target section ID from the href attribute
            const targetId = event.target.getAttribute('href').slice(1);
        
            // Use the target section ID to find the corresponding section element
            const targetSection = document.getElementById(targetId);
        
            if (targetSection) {
              targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }
          }
        });
      })

    return(
        <header className="md:flex md:justify-around p-4 md:py-2 md:px-4 text-textColor border-b">

<div className="flex items-center justify-between mb-4 md:mb-0">
  <h1 className="leading-none text-2xl text-grey-darkest">
    <a className="no-underline text-grey-darkest hover:text-black" href={home}>
     <img src={Logo} alt='logo' className='h-12'></img>
    </a>
  </h1>

  <button className="text-black hover:text-[#0b476c] md:hidden" onClick={collapse}>
  <FaBars icon="fa-solid fa-bars" />
  </button>
</div>
{/*  <form className="mb-4 w-full md:mb-0 md:w-1/4">
  <label className="hidden" for="search-form">Search</label>
  <button >Submit</button>
</form> */}

<div className='hidden md:flex' id='menu'>
  <ul class="flex md:flex-row flex-col md:gap-10 md:items-center">
    <li className="">
      <a className="block no-underline hover:underline py-2 text-primary font-bold hover:text-[#0b476c] md:border-none md:p-0" href={home}>
        Home
      </a>
    </li>
    <li className="">
      <a  className="border-t block no-underline hover:underline py-2 text-primary font-bold hover:text-[#0b476c] md:border-none md:p-0" href={service}>
        Services
      </a>
    </li>
    <li className="">
      <a className="border-t block no-underline hover:underline py-2 text-primary font-bold hover:text-[#0b476c] md:border-none md:p-0" href={team}>
        Team
      </a>
    </li>
    <li className="">
      <a className="border-t block no-underline hover:underline py-2 text-primary font-bold hover:text-[#0b476c] md:border-none md:p-0" href={portfolio}>
        Portfolio
      </a>
    </li>
  </ul>
  
</div>

<div className='border-t md:border-none md:flex md:justify-center md:items-center py-2 hidden' id='menu2'>
    {/* <button class="border border-black rounded-full px-8 py-2 mt-3 md:mt-0">Contact Us</button> */}
    <a class=" md:mt-2 md:p-0 no-underline hover:underline text-primary font-bold hover:text-[#0b476c] md:border-none" href={contact}>Contact Us</a>
  </div>

</header>
    )

}





export default Nav