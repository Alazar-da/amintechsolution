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
      <a className="block no-underline hover:underline py-2  text-emerald-900 hover:text-[#0b476c] md:border-none md:p-0 cursor-pointer  transition-colors" href={home}>
        Home
      </a>
    </li>
    <li className="">
      <a className="border-t block no-underline hover:underline py-2  text-emerald-900  hover:text-[#0b476c] md:border-none md:p-0 cursor-pointer hover:text-blue-800 transition-colors" href={team}>
        About us
      </a>
    </li>
    <li className="">
      <a  className="border-t block no-underline hover:underline py-2  text-emerald-900 hover:text-[#0b476c]   md:border-none md:p-0 cursor-pointer hover:text-blue-800 transition-colors" href={service}>
        Services
      </a>
    </li>
   
    <li className="">
    <a className=" md:mt-2 md:p-0 no-underline hover:underline  text-emerald-900  hover:text-[#0b476c]   md:border-none cursor-pointer hover:text-red-200 transition-colors" href={contact}>Contact Us</a>
    </li>
  </ul>
  
</div>

<div className='border-t md:border-none md:flex md:justify-center md:items-center py-2 hidden' id='menu2'>
    {/* <button class="border border-black rounded-full px-8 py-2 mt-3 md:mt-0">Contact Us</button> */}
    <button className="btn-cssbuttons">
            <span>Social Media</span><span>
              <svg height="18" width="18" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" className="icon">
                <path fill="#ffffff" d="M767.99994 585.142857q75.995429 0 129.462857 53.394286t53.394286 129.462857-53.394286 129.462857-129.462857 53.394286-129.462857-53.394286-53.394286-129.462857q0-6.875429 1.170286-19.456l-205.677714-102.838857q-52.589714 49.152-124.562286 49.152-75.995429 0-129.462857-53.394286t-53.394286-129.462857 53.394286-129.462857 129.462857-53.394286q71.972571 0 124.562286 49.152l205.677714-102.838857q-1.170286-12.580571-1.170286-19.456 0-75.995429 53.394286-129.462857t129.462857-53.394286 129.462857 53.394286 53.394286 129.462857-53.394286 129.462857-129.462857 53.394286q-71.972571 0-124.562286-49.152l-205.677714 102.838857q1.170286 12.580571 1.170286 19.456t-1.170286 19.456l205.677714 102.838857q52.589714-49.152 124.562286-49.152z"></path>
              </svg>
            </span>
            <ul>
            <li>
              <a  target="_blank" href=""> <svg  height="18" width="18" xmlns="http://www.w3.org/2000/svg"  fill="#fff" className="bi bi-tiktok" viewBox="0 0 16 16">
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
              </svg></a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/milkomi_education_consultancy?igsh=aW1jenl5YW1uN2dp">   <svg height="18" width="18" xmlns="http://www.w3.org/2000/svg"  fill="#fff" className="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
              </svg></a>
            </li>
            <li>
              <a href="" target="_blank"><svg  xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" className="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg></a>
            </li>
            <li>
            <a href="https://t.me/milkomieducationconsultancy" target="_blank"> <svg className="" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/></svg></a></li></ul></button>
   
  </div>

</header>
    )

}





export default Nav