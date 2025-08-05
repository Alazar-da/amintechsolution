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
             Businesses trust us for on-time delivery of high-quality web and mobile apps that drive results. We combine top developers with strict standards to build reliable, scalable solutions tailored to your needs.
               </p>
            </div>
            <div className='p-5 content-center rounded-r-[20px] md:rounded-r-[40px] flex justify-center'>
                <div className="cards">
                <div className="card red md:w-[350px] w-full px-3">
    <p className="tip">Mission</p>
    <p className="second-text">We build powerful digital solutions that simplify operations, boost online presence, and accelerate growth—delivered with unmatched quality and client focus.</p>
</div>
<div className="card blue md:w-[350px] w-full px-3">
    <p className="tip">Vision</p>
    <p className="second-text">To be the world’s most trusted tech partner, revolutionizing industries through innovative software that sets new standards.</p>
</div>
<div className="card green md:w-[350px] w-full px-3">
    <p className="tip">Ethics</p>
    <p className="second-text">Client success first. We operate with integrity, protect your ideas fiercely, and deliver solutions that exceed expectations—every time.</p>
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