import web from '../img/web2.jpg';
import mobile from '../img/mobile.jpg';
import ui from '../img/ui.png';
import  {FaArrowRight} from "react-icons/fa";

function Services() {
    return(
      <main className="grid grid-cols-1 bg-third px-5 py-5 md:pl-[85px]">
         <div className='mt-5 grid grid-cols-6'>
            <div className='mt-5 col-span-4 col-start-2'>
               <h2 className='font-bold lg:text-3xl text-2xl text-textColor text-center'>Services</h2>
               <p className="text-1xl text-textColor py-5">
                  Our website and mobile application development company serves clients with R&D, prototyping, infrastructure
                  and architecture development, and ongoing agile product delivery, all while adhering to strict compliance and
                  security standards.
               </p>
            </div>
         </div>
         <div className='grid grid-cols-7 md:gap-4'>
            <div className='col-span-5 md:col-span-2 col-start-2 mt-5'>
               <div>
                  <img src={ui} alt='service1' className="lg:h-[200px] lg:w-[100%] rounded-tl-[20px] rounded-tr-[20px]"></img>
               </div>
               <div>
                  <h2 className='font-medium text-2xl pt-4'>UI/UX Design</h2>
                  <p className="text-1xl text-textColor pt-2 pb-3 w-100">Defining powerful endgames for your business and how to achieve them.</p>
                  <button class="border border-black rounded-full px-8 py-2 mt-3 md:mt-0 inline">Get Started <FaArrowRight className='inline'/></button>
               </div>
            </div>
            <div className='col-span-5 md:col-span-2 col-start-2 md:col-start-auto mt-5'>
               <div>
                  <img src={web} alt='service2' className="lg:h-[200px] lg:w-[100%] rounded-tl-[20px] rounded-tr-[20px]"></img>
               </div>
               <div>
                  <h2 className='font-medium text-2xl pt-4'>Web Development</h2>
                  <p className="text-1xl text-textColor pt-2 pb-3">Transforming vision into human-centered digital {/* and physical */} experiences.</p>
                  <button class="border border-black rounded-full px-8 py-2 mt-3 md:mt-0">Get Started <FaArrowRight className='inline'/></button>
               </div>
            </div>
            <div className='col-span-5 md:col-span-2 col-start-2 md:col-start-auto mt-5'>
               <div>
                  <img src={mobile} alt='service3' className="lg:h-[200px] lg:w-[100%] rounded-tl-[20px] rounded-tr-[20px]"></img>
               </div>
               <div>
                  <h2 className='font-medium text-2xl pt-4'>Mobile Application</h2>
                  <p className="text-1xl text-textColor pt-2 pb-3">Building and developing full stack scalable technology solutions.</p>
                  <button class="border border-black rounded-full px-8 py-2 mt-3 md:mt-0">Get Started <FaArrowRight className='inline'/></button>
               </div>
            </div>
         </div>
      </main>
    );
   }

   export default Services;