import Services1 from '../img/serivice-1.jpg-removebg-preview-transformed.png';
import Services2 from '../img/serivice-2.jpg-removebg-preview-transformed.png';
import Services3 from '../img/serivice-3.jpg-removebg-preview-transformed.png';
import  {FaArrowRight} from "react-icons/fa";
import "../assets/color.css"
function Portfolio() {
    return(

       <>
         <div className='grid grid-cols-1 bg-third px-5 py-5 md:pl-[85px]'>
            <h1 className='animate-charcter font-bold lg:text-3xl text-2xl'>Portfolio</h1>
            <p>Take a tour through the spotlight of the projects that we have
               successfully delivered to our clients
            </p>

            <div className='md:grid lg:grid-cols-4 md:grid-cols-3 md:gap-4'>
               <div className='mt-5'>
                  <div className='bg-primary rounded-md'>
                     <img src={Services1} alt='service1'></img>
                  </div>
                  <div className='flex justify-between'>
                     <div>front-end</div>
                     <div>Sept. 12/2024</div>
                  </div>
                  <div>
                     <h2 className='font-medium text-2xl pt-4'>Strategy</h2>
                     <p className="text-1xl text-textColor pt-2 pb-3 w-100">Defining powerful endgames for your business and how to achieve them.</p>
                     <button class="border border-black rounded-full px-8 py-2 mt-3 md:mt-0 inline">View More  <FaArrowRight className='inline'/></button>
                  </div>
               </div>
               <div className='mt-5'>
                  <div className='bg-primary rounded-md'>
                     <img src={Services2} alt='service2'></img>
                  </div>
                  <div className='flex justify-between'>
                     <div>front-end</div>
                     <div>Sept. 12/2024</div>
                  </div>
                  <div>
                     <h2 className='font-medium text-2xl pt-4'>Design</h2>
                     <p className="text-1xl text-textColor pt-2 pb-3">Transforming vision into human-centered digital {/* and physical */} experiences.</p>
                     <button class="border border-black rounded-full px-8 py-2 mt-3 md:mt-0">View More  <FaArrowRight className='inline'/></button>
                  </div>
               </div>
               <div className='my-5 bg-white'>
                  <div className='bg-primary rounded-md'>
                     <img src={Services3} alt='service3'></img>
                  </div>
                  <div className='flex justify-between'>
                     <div>front-end</div>
                     <div>Sept. 12/2024</div>
                  </div>
                  <div>
                     <h2 className='font-medium text-2xl pt-4'>Engineering</h2>
                     <p className="text-1xl text-textColor pt-2 pb-3">Building and developing full stack scalable technology solutions.</p>
                     <button class="border border-black rounded-full px-8 py-2 mt-3 md:mt-0">View More <FaArrowRight className='inline'/></button>
                  </div>
               </div>
            </div>
         </div>
      </>
    );
   }

   export default Portfolio;