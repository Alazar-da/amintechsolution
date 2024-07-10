import React from 'react';
import { FiLock, FiDatabase, FiShield } from 'react-icons/fi'
import "../assets/color.css"
import "../assets/security.css"

function Security() {
    return(


    <section className="bg-third py-12 mt-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
        <h2 className="font-bold lg:text-4xl text-2xl  animate-charcter text-center">Security</h2>
          <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl unreal mt-3">
            Your Data is Safe with Us
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            We prioritize the security of your information
          </p>
        </div>
        <div className="mt-10">
          <div className="flex flex-col lg:flex-row justify-evenly items-center md:flex-row flex-wrap ">

          <div className="container2 mb-5 mt-5">
  <div className="card2">
    <div className="front2">
    <FiLock className="mx-auto h-12 w-12 text-blue-600" />
                <h3 className="mt-4 text-xl font-bold text-white">
                  Data Encryption
                </h3>
    </div>
    <div className="back2">
      
      <p className="mt-2 text-base text-white ml-2 ">
                  We use advanced encryption algorithms to protect your data
                  from unauthorized access.
                </p>
    </div>
  </div>
</div>

<div className="container2 mb-5 mt-5">
  <div className="card2">
    <div className="front2">
    <FiDatabase className="mx-auto h-12 w-12 text-blue-600" />
                <h3 className="mt-4 text-xl font-bold text-white">
                  Regular Backups
                </h3>
    </div>
    <div className="back2">
    <p className="mt-2 text-base text-white ml-2 ">
    We perform regular backups to ensure that your data is always
                  safe and can be restored if needed.
                </p>
    </div>
  </div>
</div>

<div className="container2 mb-5 mt-5">
  <div className="card2">
    <div className="front2">
    <FiShield className="mx-auto h-12 w-12 text-blue-600" />
                <h3 className="mt-4 text-xl font-bold text-white">
                  Access Control
                </h3>
    </div>
    <div className="back2">
    <p className="mt-2 text-base text-white ml-2 ">
    We implement strict access controls to ensure that only
                  authorized personnel can access your data.
                </p>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
    );
   }

   export default Security;

   /*
     <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Your Data is Safe with Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We prioritize the security of your information
          </p>
        </div>
        <div className="mt-10">
          <div className="flex flex-col sm:flex-row justify-center">
            <div className="max-w-xs bg-green shadow-lg rounded-lg overflow-hidden mx-2">
              <div className="px-6 py-8">
                <FiLock className="mx-auto h-12 w-12 text-blue-600" />
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  Data Encryption
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  We use advanced encryption algorithms to protect your data
                  from unauthorized access.
                </p>
              </div>
            </div>
            <div className="max-w-xs bg-green shadow-lg rounded-lg overflow-hidden mx-2 mt-8 sm:mt-0">
              <div className="px-6 py-8">
                <FiDatabase className="mx-auto h-12 w-12 text-blue-600" />
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  Regular Backups
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  We perform regular backups to ensure that your data is always
                  safe and can be restored if needed.
                </p>
              </div>
            </div>
            <div className="max-w-xs bg-green shadow-lg rounded-lg overflow-hidden mx-2 mt-8 sm:mt-0">
              <div className="px-6 py-8">
                <FiShield className="mx-auto h-12 w-12 text-blue-600" />
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  Access Control
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  We implement strict access controls to ensure that only
                  authorized personnel can access your data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

   */