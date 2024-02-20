import Pic from '../img/pic.png';
import "../assets/color.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


function Customers() {
  const Customer=[
    {
      rating:5,
      discription:"The leadership of the organization is impressive. I can't say enough about how aligned they have been with both of us achieving our business goals. Secondly the willingness to adapt to our Product and Engineering practices instead of forcing their own us. The transparency of the engineering teams they push us hard on what is going right and wrong.",
      name:"Tyler Downs",
      img:Pic,
    },
    {
      rating:5,
      discription:"The leadership of the organization is impressive. I can't say enough about how aligned they have been with both of us achieving our business goals. Secondly the willingness to adapt to our Product and Engineering practices instead of forcing their own us. The transparency of the engineering teams they push us hard on what is going right and wrong.",
      name:"Tyler Downs",
      img:Pic,
    },
    {
      rating:5,
      discription:"The leadership of the organization is impressive. I can't say enough about how aligned they have been with both of us achieving our business goals. Secondly the willingness to adapt to our Product and Engineering practices instead of forcing their own us. The transparency of the engineering teams they push us hard on what is going right and wrong.",
      name:"Tyler Downs",
      img:Pic,
    },
  ];

  const getStarRating = stars => {
    let rating = [];
    let i=0;
    while (i < stars) {
        rating.push(<li key={i}>
            { <FontAwesomeIcon icon={faStar}/> }
        </li>
            );
      i++;
    }
    return rating;
  };
    return(
      <div className='grid grid-cols-1'>
        <h2 className="text-3xl  font-bold text-textColor animate-charcter text-center">What our Customers say</h2>
        <p className='text-center'>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring
        to the table win-win strategies to ensure domination.</p>

        <div className='grid md:grid-cols-8 gap-4 justify-center'>
          {Customer.map((lists)=>
          <div className='grid grid-cols-1 col-span-2'>
            <ul className='text-yellow flex flex-row'>{getStarRating(lists.rating)
                    }
                    </ul>
            <p>{lists.discription}</p>
            <img className='rounded-full' src={lists.img} alt='customer'/>
            <h6>{lists.name}</h6>
          </div>
        )}
        </div>


      </div>
    );
   }
   export default Customers;

   /*    <div className="flex">
         <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={cImage} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Palm Realseate</h2>
    <p>some jiber jaber about how great outr product was but really it was really good.</p>

  </div>
</div>

<div className="card card-side bg-base-100 shadow-xl">
<figure><img src={bImage} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Bluebest</h2>
    <p>some jiber jaber about how great outr product was but really it was really good.</p>

  </div>
</div>

<div className="card card-side bg-base-100 shadow-xl">
<figure><img src={sImage} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Palm Realseate</h2>
    <p>some jiber jaber about how great outr product was but really it was really good.</p>

  </div>
</div>

        </div> */