import Lotti from '../img/lotti.svg';
import Logo from '../img/logo.svg';
import { FaBars } from "react-icons/fa";


function Home() {
  const collapse=()=>{
   document.querySelector('#menu').classList.toggle('hidden');
  }

 return(

    <div className="bg-gradient-to-r from-secondary to-[#B3DAFF] md:pl-[85px] md:h-[753px] pb-5">
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
      <header className="md:flex md:items-center md:justify-between p-4 pb-0 md:pb-4 text-textColor">

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
        <a className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
          Home
        </a>
      </li>
      <li className="md:mx-[15px] lg:mx-[30px]">
        <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
          Services
        </a>
      </li>
      <li className="md:mx-[15px] lg:mx-[30px]">
        <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
          Team
        </a>
      </li>
      <li className="md:mx-[15px] lg:mx-[30px]">
        <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
          Portfolio
        </a>
      </li>
    </ul>
    <div className='border-t md:border-none md:flex md:justify-center md:items-center'>
      {/* <button class="border border-black rounded-full px-8 py-2 mt-3 md:mt-0">Contact Us</button> */}
      <a class="py-2 md:mt-2 md:p-0 no-underline hover:underline text-grey-darkest hover:text-black md:border-none" href='#'>Contact Us</a>
    </div>
  </nav>


</header>
      <div className='md:grid md:grid-cols-2'>
        <div className='my-auto pt-5 md:pt-0 px-5 md:px-0'>
          <h1 className='font-bold lg:text-3xl text-2xl'>Software Development</h1>
              <h1 className='font-bold lg:text-3xl text-2xl'>Services</h1>
              <p className='mt-3'>
              We help you launch and scale your Mobile and Web Apps. Since 2014 we build
              custom applications loved by millions
              </p>
              <button class="border border-black rounded-full px-8 py-2 mt-3">Get in touch</button>
        </div>
        <div className='hidden md:inline'>
        <img src={Lotti} alt="logo" className='h-[600px] w-100 float-right'></img>
        </div>
      </div>
    </div>
 );
}

export default Home;