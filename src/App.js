import React, { useRef } from 'react';

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


function App() {

  const servicesRef = useRef(null);
  const teamRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef(null);

 /*  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: 'smooth' });
  }; */

  const scrollToTeam = () => {

    teamRef.current.scrollIntoView({ behavior: 'smooth' });
    
  };

  const scrollToPortfolio = () => {

    portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
    
  };

  /* const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  }; */

  return (
    <div className="App font-mainFont bg-white scroll-smooth ease-in">
      <Home  Team={scrollToPortfolio} Portfolio={scrollToTeam}/>
      <About/>
      <Services ref={servicesRef}/>
      <Whyus/>

      <Technology/>
      <Security/>
      <Teams ref={portfolioRef}/>

      <Portfolio ref={teamRef}/>
      <Customers/>
      <Contactus ref={contactRef}/>

      <Footer/>
      <button onClick={scrollToTeam}>Scroll to Technology</button>
      <button onClick={scrollToPortfolio}>Scroll to Portfolio</button>
      
    </div>
  );
}

export default App;
