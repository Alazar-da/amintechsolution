import {ReactComponent as Logo} from "../assets/react.svg"
import {ReactComponent as Vue} from "../assets/vue.svg"
import {ReactComponent as Angular} from "../assets/angular.svg"
import {ReactComponent as Js} from "../assets/javascript-1.svg"
import {ReactComponent as Php} from "../assets/php.svg"
import {ReactComponent as Node} from "../assets/nodejs-icon.svg"
import {ReactComponent as Django} from "../assets/django.svg"
import {ReactComponent as Android} from "../assets/logo-android.svg"
import {ReactComponent as Ios} from "../assets/ios-1.svg"
import {ReactComponent as Nativ} from "../assets/react-native-1.svg"
import {ReactComponent as Figma} from "../assets/figma-5.svg"
import {ReactComponent as Adobe} from "../assets/adobe-2.svg"
import {ReactComponent as Blender} from "../assets/blender-2.svg"
import "../assets/color.css"

function Technology() {
    return(
      <>
      <main className="container">
        <div className="text-center mt-7">
          <h2 className="font-bold lg:text-4xl text-2xl  animate-charcter text-center mb-5">Technology we use</h2>
          <p className="text-gray-700">
            Our team utilizes cutting-edge technology to provide innovative solutions to our clients.
            This includes software development tools and machine learning algorithms.
          </p>
      </div>
  <div className="flex flex-col mt-5">
  <h2 className="text-xl font-bold text-blue ml-10">Front-End</h2>
  <div className="grid grid-cols-4 mt-4">
    <div className="flex flex-col items-center">
      <Logo className="w-8 h-8" />
      <h3 className="font-bold text-blue text-center mt-2">React</h3>
    </div>
    <div className="flex flex-col items-center">
      <Vue className="w-8 h-8" />
      <h3 className="font-bold text-green text-center mt-2">Vue</h3>
    </div>
    <div className="flex flex-col items-center">
      <Angular className="w-8 h-8" />
      <h3 className="font-bold text-red text-center mt-2">Angular</h3>
    </div>
    <div className="flex flex-col items-center">
      <Js className="w-8 h-8" />
      <h3 className="font-bold text-yellow text-center mt-2">Javascript</h3>
    </div>
  </div>
</div>

<div className="flex flex-col mt-5">
  <h2 className="text-xl font-bold text-blue ml-10">Back-End</h2>
  <div className="grid md:grid-cols-4 grid-cols-3 mt-4">
    <div className="flex flex-col items-center">
      <Php className="w-8 h-8" />
      <h3 className="font-bold text-black text-center mt-1">PHP</h3>
    </div>
    <div className="flex flex-col items-center">
      <Node className="w-8 h-8" />
      <h3 className="font-bold text-green text-center mt-2">Node JS</h3>
    </div>
    <div className="flex flex-col items-center">
      <Django className="w-8 h-8" />
      <h3 className="font-bold text-green text-center mt-2">Django</h3>
    </div>
  </div>
</div>

<div className="flex flex-col mt-5">
  <h2 className="text-xl font-bold text-blue ml-10">Design</h2>
  <div className="grid md:grid-cols-4 grid-cols-3 mt-4">
    <div className="flex flex-col items-center">
      <Figma className="w-8 h-8" />
        <h3 className="font-bold text-red text-center mt-2">Figma</h3>
    </div>
    <div className="flex flex-col items-center">
      <Adobe className="w-8 h-8" />
      <h3 className="font-bold text-red text-center mt-2">Adobe</h3>
    </div>
    <div className="flex flex-col items-center">
      <Blender className="w-8 h-8" />
      <h3 className="font-bold text-blue italic text-center mt-2">Blender</h3>
    </div>
  </div>
</div>

<div className="flex flex-col mt-5">
  <h2 className="text-xl font-bold text-blue ml-10 italic">Mobile App</h2>
  <div className="grid md:grid-cols-4 grid-cols-3 mt-4">
    <div className="flex flex-col items-center">
      <Android className="w-8 h-8" />
      <h3 className="font-bold text-green text-center mt-1">Android</h3>
    </div>
    <div className="flex flex-col items-center">
      <Ios className="w-8 h-8" />
      <h3 className="font-bold text-red text-center mt-2">iOS</h3>
    </div>
    <div className="flex flex-col items-center">
      <Nativ className="w-8 h-8" />
      <h3 className="font-bold text-blue text-center mt-2">React Native</h3>
    </div>
  </div>
</div>
      </main>

    </>

    );
   }

   export default Technology;