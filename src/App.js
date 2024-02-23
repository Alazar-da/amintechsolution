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
  return (
    <div className="App font-mainFont bg-white">
        
      <Home/>
      <About/>
      <Services/>
      <Whyus/>

      <Technology/>
      
      <Security/>
      <Teams/>

      <Portfolio/>
      <Customers/>
      <Contactus/>
      <Trial/>
   
    
      <Footer/>
    </div>
  );
}

export default App;
