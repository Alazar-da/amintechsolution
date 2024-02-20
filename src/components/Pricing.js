import "../assets/color.css"
import "../assets/pricing.css"
function Pricing() {
    return(
      <>


       <div className="pricing">
  <div className="container">
  <h2 className="text-2xl font-bold text-textColor animate-charcter pricing__title text-center">Pricing option</h2>
    <div className="pricing__grid">
      <div className="pricing__card pricing-card pricing-card_free">
        <div className="pricing-card__top">
          <div className="pricing-card__title">UI/Ux Design</div>
          <div className="pricing-card__price">$8,000</div>
        </div>
        <div className="pricing-card__body">
          <div className="pricing-card__pluses">
            <div className="pricing-card__plus">
              <div className="pricing-card__plus-icon"><i className="material-icons">done_all</i></div>
              <div className="pricing-card__plus-text">30-day version history</div>
            </div>
            <div className="pricing-card__plus">
              <div className="pricing-card__plus-icon"><i className="material-icons">done_all</i></div>
              <div className="pricing-card__plus-text">Up to 3 projects</div>
            </div>
            <div className="pricing-card__plus">
              <div className="pricing-card__plus-icon"><i className="material-icons">done_all</i></div>
              <div className="pricing-card__plus-text">Up to 2 editors</div>
            </div>
            <div className="pricing-card__plus">
              <div className="pricing-card__plus-icon"><i className="material-icons">done_all</i></div>
              <div className="pricing-card__plus-text">Unlimited cloud storage</div>
            </div>
          </div>
          <div className="pricing-card__button"><a href="">Select</a></div>
        </div>
      </div>
      <div className="pricing__card pricing-card">
        <div className="pricing-card__top">
          <div className="pricing-card__title">Web Dev</div>
          <div className="pricing-card__price">$20,0000</div>
        </div>
        <div className="pricing-card__body">
          <div className="pricing-card__pluses">
            <div className="pricing-card__plus">
              <div className="pricing-card__plus-icon"><i className="material-icons">done_all</i></div>
              <div className="pricing-card__plus-text">Unlimited version history</div>
            </div>
            <div className="pricing-card__plus">
              <div className="pricing-card__plus-icon"><i className="material-icons">done_all</i></div>
              <div className="pricing-card__plus-text">Unlimited projects</div>
            </div>
            <div className="pricing-card__plus">
              <div className="pricing-card__plus-icon"><i className="material-icons">done_all</i></div>
              <div className="pricing-card__plus-text">Unlimited editors</div>
            </div>
            <div className="pricing-card__plus">
              <div className="pricing-card__plus-icon"><i className="material-icons">done_all</i></div>
              <div className="pricing-card__plus-text">Shareable team libraries</div>
            </div>
          </div>
          <div className="pricing-card__button"><a href="">Select</a></div>
        </div>
      </div>
      <div className="pricing__card pricing-card pricing-card_premium">
        <div className="pricing-card__top">
          <div className="pricing-card__title"> App Dev</div>
          <div className="pricing-card__price">$20,000</div>
        </div>
        <div className="pricing-card__body">
          <div className="pricing-card__pluses">
            <div className="pricing-card__plus">
              <div className="pricing-card__plus-icon"><i className="material-icons">done_all</i></div>
              <div className="pricing-card__plus-text">Org-wide design systems</div>
            </div>
            <div className="pricing-card__plus">
              <div className="pricing-card__plus-icon"><i className="material-icons">done_all</i></div>
              <div className="pricing-card__plus-text">Design system analytics</div>
            </div>
            <div className="pricing-card__plus">
              <div className="pricing-card__plus-icon"><i className="material-icons">done_all</i></div>
              <div className="pricing-card__plus-text">Centralized teams</div>
            </div>
            <div className="pricing-card__plus">
              <div className="pricing-card__plus-icon"><i className="material-icons">done_all</i></div>
              <div className="pricing-card__plus-text">Private plugins</div>
            </div>
            <div className="pricing-card__plus">
              <div className="pricing-card__plus-icon"><i className="material-icons">done_all</i></div>
              <div className="pricing-card__plus-text">SSO and advanced security</div>
            </div>
          </div>
          <div className="pricing-card__button"><a href="">Select</a></div>
        </div>
      </div>
    </div>
  </div>
</div>



     
     </>
   
    );
   }
   
   export default Pricing;


  /* <section classNameName="bg-gray-100 py-12">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="text-center">
       <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
         Our Pricing Options
       </h2>
       <p className="mt-4 text-lg text-gray-600">
         Choose the package that suits your needs
       </p>
     </div>
     <div className="mt-10">
       <div className="flex flex-col sm:flex-row justify-center">
         <div className="max-w-xs bg-blue shadow-lg rounded-lg overflow-hidden mx-2">
           <div className="px-6 py-8">
             <h3 className="text-2xl font-bold text-gray-900">Basic</h3>
             <p className="mt-4 text-gray-600">
               Perfect for small businesses
             </p>
             <div className="mt-6">
               <p className="text-4xl font-extrabold text-gray-900">
                 $99
               </p>
               <p className="mt-2 text-sm text-gray-600">per month</p>
             </div>
             <ul className="mt-6 space-y-4">
               <li className="flex items-start">
                 <svg
                   className="flex-shrink-0 h-6 w-6 text-green-500"
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="currentColor"
                   strokeWidth="2"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 >
                   <path d="M5 13l4 4L19 7"></path>
                 </svg>
                 <p className="ml-3 text-base text-gray-600">
                   Responsive Website Development
                 </p>
               </li>
               <li className="flex items-start">
                 <svg
                   className="flex-shrink-0 h-6 w-6 text-green-500"
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="currentColor"
                   strokeWidth="2"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 >
                   <path d="M5 13l4 4L19 7"></path>
                 </svg>
                 <p className="ml-3 text-base text-gray-600">
                   Mobile App Development
                 </p>
               </li>
      
             </ul>
             <div className="mt-8">
               <a
                 href="#"
                 className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
               >
                 Get Started
               </a>
             </div>
           </div>
         </div>

         <div className="max-w-xs bg-blue shadow-lg rounded-lg overflow-hidden mx-2">
           <div className="px-6 py-8">
             <h3 className="text-2xl font-bold text-gray-900">Advanced</h3>
             <p className="mt-4 text-gray-600">
               Perfect for small businesses
             </p>
             <div className="mt-6">
               <p className="text-4xl font-extrabold text-gray-900">
                 $99
               </p>
               <p className="mt-2 text-sm text-gray-600">per month</p>
             </div>
             <ul className="mt-6 space-y-4">
               <li className="flex items-start">
                 <svg
                   className="flex-shrink-0 h-6 w-6 text-green-500"
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="currentColor"
                   strokeWidth="2"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 >
                   <path d="M5 13l4 4L19 7"></path>
                 </svg>
                 <p className="ml-3 text-base text-gray-600">
                   Responsive Website Development
                 </p>
               </li>
               <li className="flex items-start">
                 <svg
                   className="flex-shrink-0 h-6 w-6 text-green-500"
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="currentColor"
                   strokeWidth="2"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 >
                   <path d="M5 13l4 4L19 7"></path>
                 </svg>
                 <p className="ml-3 text-base text-gray-600">
                   Mobile App Development
                 </p>
               </li>
             
             </ul>
             <div className="mt-8">
               <a
                 href="#"
                 className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
               >
                 Get Started
               </a>
             </div>
           </div>
         </div>

         <div className="max-w-xs bg-blue shadow-lg rounded-lg overflow-hidden mx-2">
           <div className="px-6 py-8">
             <h3 className="text-2xl font-bold text-gray-900">Ultra</h3>
             <p className="mt-4 text-gray-600">
               Perfect for small businesses
             </p>
             <div className="mt-6">
               <p className="text-4xl font-extrabold text-gray-900">
                 $99
               </p>
               <p className="mt-2 text-sm text-gray-600">per month</p>
             </div>
             <ul className="mt-6 space-y-4">
               <li className="flex items-start">
                 <svg
                   className="flex-shrink-0 h-6 w-6 text-green-500"
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="currentColor"
                   strokeWidth="2"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 >
                   <path d="M5 13l4 4L19 7"></path>
                 </svg>
                 <p className="ml-3 text-base text-gray-600">
                   Responsive Website Development
                 </p>
               </li>
               <li className="flex items-start">
                 <svg
                   className="flex-shrink-0 h-6 w-6 text-green-500"
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="currentColor"
                   strokeWidth="2"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 >
                   <path d="M5 13l4 4L19 7"></path>
                 </svg>
                 <p className="ml-3 text-base text-gray-600">
                   Mobile App Development
                 </p>
               </li>
           
             </ul>
             <div className="mt-8">
               <a
                 href="#"
                 className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
               >
                 Get Started
               </a>
             </div>
           </div>
         </div>
      
       </div>
     </div>
   </div>
 </section>

 */