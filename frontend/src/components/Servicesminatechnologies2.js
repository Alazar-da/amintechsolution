import web from '../img/web2.jpg';
import mobile from '../img/mobile.jpg';
import ui from '../img/ui.png';
import  {FaArrowRight} from "react-icons/fa";
import "../assets/color.css"
import { Helmet } from 'react-helmet-async';


function Servicesminatechnologies() {
    return(
      <>
        
  
   <main className="flex flex-col content-center py-5 mt-7" id='services'>
  <div className='container mt-5 flex flex-col'>
    <div className='mt-3'>
      <div className='text-center'>
        <h2 className="font-bold lg:text-4xl text-2xl animate-charcter">Services</h2>
      </div>
      <div className='shrink md:w-2/3 mt-5 pl-3'></div>
    </div>
    
    <div className='flex flex-col md:flex-row items-stretch gap-4 mt-5'>
    
      <div className='sm:w-4/5 w-5/6 md:w-full flex flex-col'>
        <div className='flex-1'>
          <img src={ui} alt='Professional graphic design services' className="h-[200px] w-full object-cover rounded-t-xl"></img>
        </div>
        <div className='flex-1 flex flex-col p-4'>
          <h2 className='text-2xl special text-emerald-500'>Graphics Design</h2>
          <p className="text-md text-stone-700 pt-2 pb-3 flex-1">
            We craft memorable visual identities that communicate your brand's essence. Our designs create instant recognition and emotional connections with your audience across all platforms.
          </p>
        </div>
      </div>
      
   
      <div className='sm:w-4/5 w-5/6 md:w-full flex flex-col'>
        <div className='flex-1'>
          <img src={web} alt='Custom website development solutions' className="h-[200px] w-full object-cover rounded-t-xl"></img>
        </div>
        <div className='flex-1 flex flex-col p-4'>
          <h2 className='text-2xl special text-emerald-500'>Websites That Perform</h2>
          <p className="text-md text-stone-700 pt-2 pb-3 flex-1">
            We build strategic websites designed to engage visitors and drive business growth. Every site we create delivers seamless experiences across all user devices and browsers.
          </p>
        </div>
      </div>
      
    
      <div className='sm:w-4/5 w-5/6 md:w-full flex flex-col'>
        <div className='flex-1'>
          <img src={mobile} alt='Custom mobile application development' className="h-[200px] w-full object-cover rounded-t-xl"></img>
        </div>
        <div className='flex-1 flex flex-col p-4'>
          <h2 className='text-2xl special text-emerald-500'>Mobile Experiences</h2>
          <p className="text-md text-stone-700 pt-2 pb-3 flex-1">
            We develop intuitive mobile apps that solve real problems and keep users engaged. Our solutions work flawlessly across iOS and Android platforms.
          </p>
        </div>
      </div>
    </div>
  </div>
</main>
      </>
    );
   }

   export default Servicesminatechnologies;