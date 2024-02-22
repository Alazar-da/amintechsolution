import Why from '../img/why.svg';
import "../assets/why.css"

function Whyus() {
    return(
      <main className='container bg-white py-3 '>
         <div className='md:flex justify-center md:flex-row grid justify-items-center lg:w-5/6 md:3/4'>
            <div className='bg-primary grid content-center rounded-l-[15px] rounded-r-[15px] h-48 md:h-auto md:rounded-l-[40px] md:rounded-r-none md:2/3 w-full px-3 p-5'>
               <h2 className="font-bold text-[#FFF] lg:text-3xl text-2xl">Why US?</h2>
               <p className="text-[#FFF] md:flex text-xs md:text-base mt-1">
               We deliver web app development services for our clients
               with predictable outcomes. For this, we hire brilliant web
               and mobile app developers to deliver projects on time and
               maintain top-notch code standards.
               </p>
            </div>
            <div className='p-5 grid content-center rounded-r-[20px] md:rounded-r-[40px] flex justify-center'>
                <div className="cards">
                    <div className="card red md:w-[350px] w-full px-3">
                        <p className="tip">Mission</p>
                        <p className="second-text">some information about the misio of the companh go  ndsk</p>
                    </div>
                    <div className="card blue md:w-[350px] w-full px-3">
                        <p className="tip">Vision</p>
                        <p className="second-text">Lorem Ipsum</p>
                    </div>
                    <div className="card green md:w-[350px] w-full px-3">
                        <p className="tip">Ethics</p>
                        <p className="second-text">Lorem Ipsum</p>
                    </div>
                </div>
            </div>
         </div>
      </main>

    );
   }

   export default Whyus;


 //  <img src={Why} alt='why us'></img>