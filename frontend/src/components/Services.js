import web from '../img/web2.jpg';
import mobile from '../img/mobile.jpg';
import ui from '../img/ui.png';
import  {FaArrowRight} from "react-icons/fa";
import "../assets/color.css"


function Services() {
    return(
      <main className="container-fluid grid grid-cols-1 content-center bg-third px-5 mt-7 relative" id='services'>
         <div className='mt-5 flex flex-col'>
            <div className='mt-3'>
            <div className='text-center'>
                  <h2 className="font-bold lg:text-4xl text-2xl animate-charcter">Services</h2>

                  </div>
               <div className='shrink md:w-2/3 md:pl-[85px]'>
               <p className="text-1xl text-black py-5">
                  Our Company provides the following services
               </p>
            </div>
         </div>
         <div className='grid grid-cols-7 md:gap-4 md:pl-[85px]'>
            <div className='col-span-5 md:col-span-2 col-start-2 mt-5'>
               <div>
                  <img src={ui} alt='service1' className="lg:h-[200px] lg:w-[100%] rounded-tl-[20px] rounded-tr-[20px]"></img>
               </div>
               <div>
                  <h2 className='font-medium text-2xl pt-4'>UI/UX Design</h2>
                  <p className="text-1xl text-textColor pt-2 pb-3 w-100">Our dedicated UI/UX designers craft intuitive and visually appealing user interfaces that enhance the overall user experience of your digital products. We follow a user-centric design approach, conducting thorough research and usability testing to ensure that your applications are not only aesthetically pleasing but also highly user-friendly.</p>
                  <button class="border border-black rounded-full px-8 py-2 mt-3 md:mt-0 inline">Learn More <FaArrowRight className='inline'/></button>
               </div>
            </div>
            <div className='col-span-5 md:col-span-2 col-start-2 md:col-start-auto mt-5'>
               <div>
                  <img src={web} alt='service2' className="lg:h-[200px] lg:w-[100%] rounded-tl-[20px] rounded-tr-[20px]"></img>
               </div>
               <div>
                  <h2 className='font-medium text-2xl pt-4'>Web Development</h2>
                  <p className="text-1xl text-textColor pt-2 pb-3">Our expert team designs and develops visually stunning and highly functional websites tailored to meet your business objectives. We create responsive and user-friendly websites that provide an exceptional user experience across all devices and browsers.</p>
                  <button class="border border-black rounded-full px-8 py-2 mt-3 md:mt-0">Learn More <FaArrowRight className='inline'/></button>
               </div>
            </div>
            <div className='col-span-5 md:col-span-2 col-start-2 md:col-start-auto mt-5'>
               <div>
                  <img src={mobile} alt='service3' className="lg:h-[200px] lg:w-[100%] rounded-tl-[20px] rounded-tr-[20px]"></img>
               </div>
               <div>
                  <h2 className='font-medium text-2xl pt-4'>Mobile Application</h2>
                  <p className="text-1xl text-textColor pt-2 pb-3">Building and developing full stack scalable technology solutions.We specialize in building native and cross-platform mobile applications that run seamlessly on iOS and Android devices. Our skilled developers leverage the latest technologies and frameworks to create robust and feature-rich mobile apps that cater to your unique requirements.</p>
                  <button class="border border-black rounded-full px-8 py-2 mt-3 md:mt-0">Learn More <FaArrowRight className='inline'/></button>
               </div>
            </div>
         </div>
         </div>
      </main>
    );
   }

   export default Services;