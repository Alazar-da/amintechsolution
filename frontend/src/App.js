

import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Whyus from './components/Whyus';

import Technology from './components/Technology';
import Pricing from './components/Pricing';
import Security from './components/Security';
import Teams from './components/Teams';
import Portfolio from './components/Portfolio';
import Customers from './components/Customers';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import BuPortfolio from './components/BuPortfolio';

import Nav from './components/Nav';
import Admin from './components/Admin';




import "./App.css"



import React, { useEffect, useRef } from 'react';








function App() {

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

  /////////////////////////////////////////////////////////////////////////////////////////
   useEffect(() => {
   

    // Scroll back to top
    const progressPath = document.querySelector('.progress-wrap path');
    const pathLength = progressPath.getTotalLength();
    progressPath.style.transition = 'none';
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = 'stroke-dashoffset 10ms linear';

    const updateProgress = () => {
      const scroll = window.pageYOffset || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress);

    const offset = 50;
    const duration = 550;
    const handleScroll = () => {
      const progressWrap = document.querySelector('.progress-wrap');
      if (window.pageYOffset > offset) {
        progressWrap.classList.add('active-progress');
      } else {
        progressWrap.classList.remove('active-progress');
      }
    };

    window.addEventListener('scroll', handleScroll);

    const handleProgressWrapClick = (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleProgressWrapclick = () => {
   // event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }; 


  /////////////////////////////////////////////////////////////////////////////////////////
  return (

    
    <html data-theme="light">

  
   
   
      
    <div className="App font-mainFont bg-slate-50" style={{scrollBehavior:'smooth'}} >


    <Nav home={"#home"} service={"#services"} about={"#about"} contact={"#contactus"}/>

      <section id='home'>
      <Home/>

      </section>


      <section id="about">
      <About/>

      </section>


      <section id='services'>

      <Services/>

      </section>


      <section id='whyus'>
      <Whyus/>

      </section>



      <section>
      <Portfolio /> 
 

      </section>
    
     
    
      <section id='technology'>
      <Technology/>

        </section>

        <section id='security'>
        <Security/>

        </section>

     {/*  <section id='customers'>
       <Customers/>

       </section>  */}
      
  
    


      <section id='contactus'>
      <Contactus/>

      </section>


    
     
    
   
    
      <Footer/>

      <div className="progress-wrap" onClick={handleProgressWrapclick}>
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
  <path d="M50,25 L75,50 L62,50 L62,75 L38,75 L38,50 L25,50 Z" />
</svg>
	</div> 


    
      
    </div>

    </html>


 

  

 
   


   
  
  ); 
   
}

export default App;
