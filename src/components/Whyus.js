import Why from '../img/why.svg';

function Whyus() {
    return(
      <main className='grid justify-center grid-cols-1 md:grid-cols-6  gap-1 md:gap-2 lg:gap-4 my-5 mx-2 bg-white'>
         <div className='grid grid-cols-2 lg:col-start-2 lg:col-span-4 md:col-start-2 md:col-span-4'>
            <div className='bg-primary  rounded-l-[20px] md:rounded-l-[40px] grid grid-cols-1 content-center p-5 '>
               <h2 className="font-bold text-[#FFF] lg:text-3xl text-2xl">Why US?</h2>
               <p className="text-[#FFF] md:flex text-xs md:text-base mt-1">
               We deliver web app development services for our clients
               with predictable outcomes. For this, we hire brilliant web
               and mobile app developers to deliver projects on time and
               maintain top-notch code standards.
               </p>
            </div>
            <div className='md:p-5 bg-[#F7FDFF] grid content-center  rounded-r-[20px] md:rounded-r-[40px]'>
               <img src={Why} alt='why us'></img>
            </div>
         </div>
      </main>

    );
   }

   export default Whyus;