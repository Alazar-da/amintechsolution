import "./Teams.css"
import 'swiper/swiper-bundle.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react';
import './CircularCarousel.css';
function Teams() {
  const carouselItems = [
    {
      id: 1,
      content: (
        <div>
          <div className="card">
            <h2 className="text-white text-2xl">Emran Hayredin</h2>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div>
          <div className="card">
            <h2 className="text-white text-2xl">Alazar Damena</h2>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div>
          <div className="card">
            <h2 className="text-white text-2xl">Natnael Mengistu</h2>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div>
          <div className="card">
            <h2 className="text-white text-2xl">Natnael Mengistu</h2>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      content: (
        <div>
          <div className="card">
            <h2 className="text-white text-2xl">Natnael Mengistu</h2>
          </div>
        </div>
      ),
    },
    // Add more card items as needed
  ];


    return(
      <>
  
   
       <h1 className="text-3xl font-bold text-textColor">Teams</h1>

     
       <div className="carousel-container">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        emulateTouch={true}
        selectedItem={0}
        centerMode={true}
        centerSlidePercentage={23.33}
        renderIndicator={() => null}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button type="button" onClick={onClickHandler} title={label} className="arrow-prev">
              <span className="arrow-icon">&lt;</span>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button type="button" onClick={onClickHandler} title={label} className="arrow-next">
              <span className="arrow-icon">&gt;</span>
            </button>
          )
        }
      >
        {carouselItems.map((item) => (
          <div key={item.id}>{item.content}</div>
        ))}
      </Carousel>
    </div>
  


       </>
   
    );
   }
   
   export default Teams;