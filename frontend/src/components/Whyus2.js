import Why from '../img/why.svg';
import "../assets/why.css"
import { Helmet } from 'react-helmet-async';

function Whyus() {
    return(
        <>

        

     
      <main className='container flex justify-center  py-5 text-center'>
         <div className='md:flex justify-center md:flex-row grid justify-items-center lg:w-5/6 relative mt-7'>
            <div className='bg-cyan-800 grid content-center rounded-l-[15px] rounded-r-[15px] h-48 md:h-auto md:rounded-l-[40px] md:rounded-r-none md:2/3 w-full px-3 p-5'>
               <h2 className="font-bold text-[#FFF] lg:text-3xl text-2xl">Why US?</h2>
               <p className="text-[#FFF] md:flex text-xs md:text-base mt-1">
               mina technologies delivers web app development services for our clients
               with predictable outcomes. For this, we hire brilliant web
               and mobile app developers to deliver projects on time and
               maintain top-notch code standards.
               </p>
            </div>
            <div className='p-5 content-center rounded-r-[20px] md:rounded-r-[40px] flex justify-center'>
                <div className="cards">
                    <div className="card red md:w-[350px] w-full px-3">
                        <p className="tip">Mission</p>
                        <p className="second-text">Our mission is to empower businesses and individuals by providing them with cutting-edge software solutions that enhance their digital presence, streamline their operations, and drive their success. We strive to deliver exceptional value through innovative technologies, superior craftsmanship, and a client-centric approach.</p>
                    </div>
                    <div className="card blue md:w-[350px] w-full px-3">
                        <p className="tip">Vision</p>
                        <p className="second-text">Our vision is to become a globally recognized software company known for its excellence in delivering transformative digital solutions. We aim to be the preferred partner for businesses seeking reliable and innovative software services, setting new industry standards and inspiring positive change through technology.</p>
                    </div>
                    <div className="card green md:w-[350px] w-full px-3">
                        <p className="tip">Ethics</p>
                        <p className="second-text">
                        At mina technologies, we prioritize our clients' needs and goals, going above and beyond to deliver high-quality software solutions that address their specific requirements. We conduct our business with integrity, maintaining the highest ethical standards in all our interactions while respecting confidentiality and protecting our clients' intellectual property.
                        </p>
                    </div>
                </div>
            </div>
         </div>
      </main>
      </>

    );
   }

   export default Whyus;


 //  <img src={Why} alt='why us'></img>