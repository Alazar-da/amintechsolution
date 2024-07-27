

/*import Minatechnologies from './components/minatechnologies';
import Aboutminatechnologies from './components/Aboutminatechnologies';
import Services from './components/Servicesminatechnologies';
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

import { Helmet } from 'react-helmet';*/

import App2 from './App2'
import Aboutminatechnologies from './components/Aboutminatechnologies';
import Servicesminatechnologies from './components/Servicesminatechnologies';
import Whyus from './components/Whyus';
import Teams from './components/Teams';
import Portfolio from './components/Portfolio';
import Technology from './components/Technology';
import Security from './components/Security';
import Contactus from './components/Contactus';

import {BrowserRouter as Router,Route} from 'react-router-dom'




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
  


  /////////////////////////////////////////////////////////////////////////////////////////
  return (

 

    <Router>
    
      <Route exact path={"/service"} component={Servicesminatechnologies}></Route>
      <Route exact path={"/about"} component={Aboutminatechnologies}></Route>
      <Route exact path={"/whyus"} component={Whyus}></Route>
      <Route exact path={"/team"} component={Teams}></Route>
      <Route exact path={"/portfolio"} component={Portfolio}></Route>
      <Route exact path={"/technology"} component={Technology}></Route>

      <Route exact path={"/security"} component={Security}></Route>
      <Route exact path={"/contactus"} component={Contactus}></Route>

      <Route exact path={"/"} component={App2}></Route>

    </Router>




   
  
  ); 
   
}

export default App;
