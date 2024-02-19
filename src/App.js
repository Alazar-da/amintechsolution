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


function App() {
  return (
    <div className="App font-mainFont">
      <Home/>
      <About/>
      <Services/>
      <Whyus/>

      <Technology/>
      <Pricing/>
      <Security/>
      <Teams/>

      <Portfolio/>
      <Customers/>
      <Contactus/>
      <Footer/>
    </div>
  );
}

export default App;
