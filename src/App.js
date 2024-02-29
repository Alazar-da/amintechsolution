

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
import Trial from './components/Trial';
import Nav from './components/Nav';



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
  return (
    <div className="App font-mainFont bg-white" style={{scrollBehavior:'smooth'}}>
      <Nav home={"#home"} service={"#services"} team={"#portfolio"} portfolio={"#team"} contact={"#contactus"}/>
     

      <section id='home'>
      <Home/>

      </section>


      <section>
      <About/>

      </section>


      <section id='services'>

      <Services/>

      </section>


      <section id='whyus'>
      <Whyus/>

      </section>
    
     
    
      <section id='technology'>
      <Technology/>

        </section>

        <section id='security'>
        <Security/>

        </section>

     
    
      <section id='team'>
      <Teams/>

      </section>

      <section id='portfolio'>
      <Portfolio/>

      </section>
     
 
      {/*  <section id='customers'>
       <Customers/>

       </section> */}
  
    


      <section id='contactus'>
      <Contactus/>

      </section>
     
     
   
    
      <Footer/>
    
      
    </div>
  );
}

export default App;
